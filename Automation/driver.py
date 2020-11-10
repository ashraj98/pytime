from Naked.toolshed.shell import execute_js, muterun_js
import os 
import sys
curPath = os.getcwd() 
for file in os.listdir(curPath):
    if file.endswith("js"):
        response= execute_js(file)
        