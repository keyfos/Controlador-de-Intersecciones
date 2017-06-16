
long tiempo;
long tiempo_2;
int disparador = 7;   // triger
int entrada = 8;      // echo
float distancia;
float distancia_2;
int disparador_2 = 4; //triger2
int entrada_2 = 5; //echo2
void setup()
{
  pinMode(disparador, OUTPUT);
  pinMode(entrada, INPUT);
  pinMode(disparador_2, OUTPUT);
  pinMode(entrada_2, INPUT);
  pinMode(2, OUTPUT); //peatonal1
  pinMode(3, OUTPUT); //peatonal2

  pinMode(6, OUTPUT); //verde1
  pinMode(9, OUTPUT); //amarillo1
  pinMode(10, OUTPUT); //rojo1
  pinMode(11, OUTPUT); //verde2
  pinMode(12, OUTPUT); //amarillo2f
  pinMode(13, OUTPUT); //rojo2

  Serial.begin(9600);
}


void loop()
{
  digitalWrite(disparador, HIGH);
  delayMicroseconds(5);
  digitalWrite(disparador, LOW);
  tiempo = (pulseIn(entrada, HIGH) / 2);
  distancia = float(tiempo * 0.0343);
  Serial.println(distancia);

  digitalWrite(10, HIGH); //rojo1 ON
  digitalWrite(11, HIGH); //verde2 ON
  digitalWrite(3, HIGH); //peatonal2 ON
  if (distancia > 0) {
    delay(10000);
  } else {

    digitalWrite(11, HIGH); //verde2 ON
    delay(900);
    digitalWrite(11, LOW); //VERDE2 OFF
    delay(900);

    digitalWrite(11, HIGH); //VERDE2 ON
    delay(900);
    digitalWrite(11, LOW); //VERDE2 OFF
    delay(900);
    digitalWrite(11, HIGH); //VERDE2 ON
    delay(900);

  }
  //delay(10000);
  digitalWrite(11, LOW); //verde2 OFF
  digitalWrite(12, HIGH); //amarillo2 ON
  delay(5000);

  digitalWrite(3, LOW); //peatonal2 OFF
  digitalWrite(10, LOW); //rojo1 OFF
  digitalWrite(12, LOW); //Amarillo2 OFF

  digitalWrite(disparador_2, HIGH);
  delayMicroseconds(5);
  digitalWrite(disparador_2, LOW);
  tiempo_2 = (pulseIn(entrada_2, HIGH) / 2);
  distancia_2 = float(tiempo_2 * 0.0343);
  Serial.println(distancia_2);


  digitalWrite(6, HIGH); //Verde1 ON
  digitalWrite(13, HIGH); //rojo2 ON
  digitalWrite(2, HIGH); //peatonal1 ON
  if (distancia > 0) {
    delay(10000);
  } else {

    digitalWrite(6, HIGH);
    delay(900);
    digitalWrite(6, LOW);
    delay(900);

    digitalWrite(6, HIGH);
    delay(900);
    digitalWrite(6, LOW);
    delay(900);
    digitalWrite(6, HIGH);
    delay(900);

  }

  digitalWrite(6, LOW); //Verde1 OFF
  digitalWrite(9, HIGH); //Amarillo1 ON
  delay(5000);

  digitalWrite(2, LOW); //peatonal1 OFF
  digitalWrite(9, LOW); //Amarillo1 OFF
  digitalWrite(13, LOW); //Rojo2 OFF

}

