export const fonction_captureOutput = `import pyRAPL
import io
import contextlib
from pyJoules.energy_meter import measure_energy

def capture_output(func):
    output = io.StringIO()
    with contextlib.redirect_stdout(output):
        func()
    return output.getvalue()`;

export const fonction_displayResults = `
def display_results(result_str_pyJoules, result_str_pyRAPL, type):
    print(f"---- {type} ----")
    result_dict_pyJoules = {}                                                           # Analyse des résultats pyJoules
    for line in result_str_pyJoules.split(';'):
        key, value = map(str.strip, line.split(':', 1))
        result_dict_pyJoules[key] = value

    lines_pyRAPL = result_str_pyRAPL.strip().split('/n')                                # Analyse des résultats pyRAPL

    duration_pyRAPL = float(lines_pyRAPL[2].split(':')[1].strip()[:-3]) / 1e6           # Durées en secondes
    duration_pyJoules = float(result_dict_pyJoules.get('duration', '0'))            
    print(f"Durée (pyRAPL) : {duration_pyRAPL:.6f} secondes Durée (pyJoules) : {duration_pyJoules} secondes")

    energy_cpu_pyRAPL = float(lines_pyRAPL[5].split(':')[1].strip()[:-3]) / 1e6         # Résultats pyRAPL
    power_cpu_pyRAPL = energy_cpu_pyRAPL / duration_pyRAPL                              
    print(f'CPU AMD Ryzen 7 5800H (pyRAPL) : {energy_cpu_pyRAPL} Joules, {power_cpu_pyRAPL} Watts')

    energy_cpu_pyJoules = float(result_dict_pyJoules.get('package_0', 0)) / 1_000_000   # Résultats pyJoules
    power_cpu_pyJoules = energy_cpu_pyJoules / duration_pyJoules
    print(f'CPU AMD Ryzen 7 5800H (pyJoules) : {energy_cpu_pyJoules} Joules, {power_cpu_pyJoules} Watts')`;

export const code_whileFor = `pyRAPL.setup()
@pyRAPL.measureit()
def pyRAPL_while():
    i = 0
    while i < 100_000:
        i += 1

@pyRAPL.measureit()
def pyRAPL_for():
    j = 0
    for i in range(100_000):
        j += 1

@measure_energy
def pyJoules_while():
    i = 0
    while i < 100_000:
        i += 1

@measure_energy
def pyJoules_for():
    j = 0
    for i in range(100_000):
        j += 1

display_results(capture_output(pyJoules_while), capture_output(pyRAPL_while), "Résultats boucle while")
display_results(capture_output(pyJoules_for), capture_output(pyRAPL_for), "Résultats boucle for")`;

export const code_selectCase = `pyRAPL.setup()
@pyRAPL.measureit()
def pyRAPL_match():
    for _ in range(100_000):
        value = 4
        match value:
            case 1:
                pass
            case 2:
                pass
            case 3:
                pass

@pyRAPL.measureit()
def pyRAPL_if():
    for _ in range(100_000):
        value = 4  
        if value == 1:
            pass
        elif value == 2:
            pass
        elif value == 3:
            pass

@measure_energy
def pyJoules_match():
    for _ in range(100_000):
        value = 4  
        match value:
            case 1:
                pass
            case 2:
                pass
            case 3:
                pass

@measure_energy
def pyJoules_if():
    for _ in range(100_000):
        value = 4
        if value == 1:
            pass
        elif value == 2:
            pass
        elif value == 3:
            pass

display_results(capture_output(pyJoules_match), capture_output(pyRAPL_match), "Résultats select case")
display_results(capture_output(pyJoules_if), capture_output(pyRAPL_if), "Résultats if/elif")`;

export const code_increment = `pyRAPL.setup()
@pyRAPL.measureit()
def pyRAPL_incShort():
    i = 0
    while i < 100_000:
        i += 1

@pyRAPL.measureit()
def pyRAPL_incLong():
    i = 0
    while i < 100_000:
        i = i + 1

@measure_energy
def pyJoules_incShort():
    i = 0
    while i < 100_000:
        i += 1

@measure_energy
def pyJoules_incLong():
    i = 0
    while i < 100_000:
        i = i + 1

display_results(capture_output(pyJoules_incShort), capture_output(pyRAPL_incShort), "Résultats i += 1")
display_results(capture_output(pyJoules_incLong), capture_output(pyRAPL_incLong), "Résultats i = i + 1")`;

export const code_recursif = `if recursive(n):
if n == 0:
    return 0
return recursive(n - 1)

def non_recursive(n):
while n != 0:
    n = n - 1
return n

@measure_energy
def pyJoules_recursive():
recursive(900)

@measure_energy
def pyJoules_nonRecursive():
non_recursive(900)

display_results(capture_output(pyJoules_recursive), "Résultats boucle recursive")
display_results(capture_output(pyJoules_nonRecursive), "Résultats boucle non recursive")`;

