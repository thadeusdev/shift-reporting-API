export const generators = [
    {
        id: 1,
        time: "7:15am",
        date: "03/3/2023",
        name: "generator1",
        runtime: "25hrs",
        temperature: "25",
        battery_charge: '27.9v',
        fuel_level: '2116l',
        shift: "day",
        team: "Thadeus Nyariki"
    },
    {
        id: 2,
        time: "7:15am",
        date: "03/3/2023",
        name: "generator2",
        runtime: "25hrs",
        temperature: "25",
        battery_charge: '27.9v',
        fuel_level: '2116l',
        shift: "day",
        team: "Thadeus Nyariki"
    },
    {
        id: 3,
        time: "7:15am",
        date: "03/3/2023",
        name: "generator3",
        runtime: "25hrs",
        temperature: "25",
        battery_charge: '27.9v',
        fuel_level: '2116l',
        shift: "day",
        team: "Thadeus Nyariki"
    },
]

export const ups = [
    {
        id: 1,
        time: "8:00pm",
        date: "03/3/2023",
        shift: "day",
        team: "Thadeus Nyariki",
        name: "UPSA",
        voltage_L1L2: "415V",
        voltage_L2L3: "415V",
        voltage_L3L1: "415V",
        output_voltage_L1N: "240V",
        output_voltage_L2N: "240V",
        output_voltage_L3N: "240V",
        load_current_L1: "18A",
        load_current_L2: "18A",
        load_current_L3: "18A",
        faulty_modules: "none",
    },
    {
        id: 2,
        time: "8:00pm",
        date: "03/3/2023",
        shift: "day",
        team: "Thadeus Nyariki",
        name: "MUPS",
        voltage_L1L2: "415V",
        voltage_L2L3: "415V",
        voltage_L3L1: "415V",
        output_voltage_L1N: "240V",
        output_voltage_L2N: "240V",
        output_voltage_L3N: "240V",
        load_current_L1: "18A",
        load_current_L2: "18A",
        load_current_L3: "18A",
        faulty_modules: "none",
    },
    {
        id: 3,
        time: "8:00pm",
        date: "03/3/2023",
        shift: "day",
        team: "Thadeus Nyariki",
        name: "UPSB",
        voltage_L1L2: "415V",
        voltage_L2L3: "415V",
        voltage_L3L1: "415V",
        output_voltage_L1N: "240V",
        output_voltage_L2N: "240V",
        output_voltage_L3N: "240V",
        load_current_L1: "18A",
        load_current_L2: "18A",
        load_current_L3: "18A",
        faulty_modules: "none",
    },
]

export const temperatures = [
    {
        id: 1,
        time: "8:00pm",
        date: "03/3/2023",
        shift: "day",
        team: "Thadeus Nyariki",
        ups_a: "25",
        ups_b: "25",
        mdb_a: "23",
        mdb_b: "23",
        datahall: "23",
        battery_a: "18",
        battery_b: "25",
    },
    {
        id: 2,
        time: "8:00pm",
        date: "03/3/2023",
        shift: "day",
        team: "Thadeus Nyariki",
        ups_a: "25",
        ups_b: "25",
        mdb_a: "23",
        mdb_b: "23",
        datahall: "23",
        battery_a: "18",
        battery_b: "25",
    },
    {
        id: 3,
        time: "8:00pm",
        date: "03/3/2023",
        shift: "day",
        team: "Thadeus Nyariki",
        ups_a: "25",
        ups_b: "25",
        mdb_a: "23",
        mdb_b: "23",
        datahall: "23",
        battery_a: "18",
        battery_b: "25",
    },
]

export const members = [
    {
        id: 1,
        name: "Thadeus Nyariki",
        role: "engineer"
    },
    {
        id: 2,
        name: "Franklin Yego",
        role: "engineer"
    },
    {
        id: 3,
        name: "Jeremiah John",
        role: "engineer"
    },
]

export const cracs = [
    {
        id: 1,
        time: "8:00pm",
        date: "3/02/2023",
        shift: "day",
        name: "CRAC 1",
        status: "okay",
        team: "Thadeus Nyariki",
        note: "okay"
    },
    {
        id: 2,
        time: "8:00pm",
        date: "3/02/2023",
        shift: "day",
        name: "CRAC 2",
        status: "okay",
        team: "Thadeus Nyariki",
        note: "okay"
    },
    {
        id: 3,
        time: "8:00pm",
        date: "3/02/2023",
        shift: "day",
        name: "CRAC 3",
        status: "okay",
        team: "Thadeus Nyariki",
        note: "okay"
    },
]

export const src = [
    {
        id: 1,
        time: "8:00pm",
        date: "3/03/2023",
        team: "Thadeus Nyariki",
        shift: "day",
        name: "battA A/C1",
        status: "okay",
        note: "okay"
    },
    {
        id: 2,
        time: "8:00pm",
        date: "3/03/2023",
        team: "Thadeus Nyariki",
        shift: "day",
        name: "battA A/C2",
        status: "okay",
        note: "okay"
    },
    {
        id: 3,
        time: "8:00pm",
        date: "3/03/2023",
        team: "Thadeus Nyariki",
        shift: "day",
        name: "battB A/C1",
        status: "okay",
        note: "okay"
    },
    {
        id: 4,
        time: "8:00pm",
        date: "3/03/2023",
        team: "Thadeus Nyariki",
        shift: "day",
        name: "battB A/C2",
        status: "okay",
        note: "okay"
    },
]

export const equipment_status = [
    {
        id: 1,
        time: "8:00pm",
        date: "3/03/2023",
        team: "Thadeus Nyariki",
        shift: "day",
        name: "condensor",
        status: "okay"
    },
    {
        id: 2,
        time: "8:00pm",
        date: "3/03/2023",
        team: "Thadeus Nyariki",
        shift: "day",
        name: "cabinets",
        status: "okay"
    },
    {
        id: 3,
        time: "8:00pm",
        date: "3/03/2023",
        team: "Thadeus Nyariki",
        shift: "day",
        name: "vesda",
        status: "okay"
    },
]

export const cleanliness = [
    {
        id: 1,
        time: "8:00pm",
        date: "3/03/2023",
        team: "Thadeus Nyariki",
        shift: "day",
        room: "datahall",
        status: "okay",
        note: "okay"
    },
    {
        id: 2,
        time: "8:00pm",
        date: "3/03/2023",
        team: "Thadeus Nyariki",
        shift: "day",
        room: "MDB A",
        status: "okay",
        note: "okay"
    },
    {
        id: 3,
        time: "8:00pm",
        date: "3/03/2023",
        team: "Thadeus Nyariki",
        shift: "day",
        room: "MDB B",
        status: "okay",
        note: "okay"
    },
]

export const alarms = [
    {
        id: 1,
        time: "8:00pm",
        date: "3/03/2023",
        team: "Thadeus Nyariki",
        shift: "day",
        name: "transducer unresponsive",
        type: "info alarm",
        root_cause: "power loss",
        action: "acknowledged",
        reason_uncleared: "keeps coming"
    },
    {
        id: 2,
        time: "8:00pm",
        date: "3/03/2023",
        team: "Thadeus Nyariki",
        shift: "day",
        name: "transducer unresponsive",
        type: "info alarm",
        root_cause: "power loss",
        action: "acknowledged",
        reason_uncleared: "keeps coming"
    },
    {
        id: 3,
        time: "8:00pm",
        date: "3/03/2023",
        team: "Thadeus Nyariki",
        shift: "day",
        name: "transducer unresponsive",
        type: "info alarm",
        root_cause: "power loss",
        action: "acknowledged",
        reason_uncleared: "keeps coming"
    },
]