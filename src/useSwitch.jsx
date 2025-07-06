/* 🏆 Snack 1: useSwitch() – Toggle Booleano
Creare un custom hook per alternare un valore booleano tra true e false.

Cosa deve fare?

Inizialmente false.
Ritorna il valore attuale e una funzione toggle() per cambiarlo.
Quando toggle() viene chiamato, il valore passa da true → false e viceversa. */

import { useState } from "react";

export default function useSwitch(defaultValue = false) {

    const [isOn, setIsOn] = useState(defaultValue)

    const toggle = () => !isOn ? setIsOn(true) : setIsOn(false)

    return [isOn, toggle]
}