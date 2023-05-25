HackbitOLEDDisplay.init(128, 64)
HackbitOLEDDisplay.clear()
HackbitOLEDDisplay.writeStringNewLine("Estacao Meteorologica")
basic.forever(function () {
    hackbit.queryData(
    hackbit.DHTtype.DHT11,
    DigitalPin.P2,
    true,
    false,
    true
    )
    basic.pause(2000)
    if (hackbit.readData(hackbit.dataType.temperature) != -999) {
        HackbitOLEDDisplay.clear()
        HackbitOLEDDisplay.writeStringNewLine("Estacao Meteorologica")
        HackbitOLEDDisplay.writeStringNewLine("Dados coletados:")
        HackbitOLEDDisplay.writeString("Temp:")
        HackbitOLEDDisplay.writeNum(hackbit.readData(hackbit.dataType.temperature))
        HackbitOLEDDisplay.writeStringNewLine(" C")
        HackbitOLEDDisplay.writeString("Temp:")
        HackbitOLEDDisplay.writeNum(hackbit.readData(hackbit.dataType.temperature) * (9 / 5) + 32)
        HackbitOLEDDisplay.writeStringNewLine(" F")
        HackbitOLEDDisplay.writeString("Umid:")
        HackbitOLEDDisplay.writeNumNewLine(hackbit.readData(hackbit.dataType.humidity))
        HackbitOLEDDisplay.writeString("Temp mb:")
        HackbitOLEDDisplay.writeNum(input.temperature())
        HackbitOLEDDisplay.writeStringNewLine(" C")
        HackbitOLEDDisplay.writeString("dif:")
        HackbitOLEDDisplay.writeNum(input.temperature() - hackbit.readData(hackbit.dataType.temperature))
        HackbitOLEDDisplay.writeStringNewLine(" C")
        basic.pause(5000)
    }
})
