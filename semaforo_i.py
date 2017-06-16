
 
# Importamos la libreira de PySerial
import serial
 
# Abrimos el puerto del arduino a 9600
ser = serial.Serial('COM4', 9600)
# Creamos un buble sin fin
sArduino = ser.readline()
while True:
  # leemos hasta que encontarmos el final de linea
  sArduinoAux = sArduino
  sArduino = ser.readline()
  # Mostramos el valor leido y eliminamos el salto de linea del final
  print "Distancia: " + sArduino.rstrip('\n')
  outfile = open('texto.txt', 'w') # Indicamos el valor 'w'.
  outfile.write(sArduinoAux)
  outfile.write(sArduino)
  outfile.close()
  



  



