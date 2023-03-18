# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

generators = Generator.create(
    [
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
)

ups = Up.create(
    [
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
)

temperatures = Temperature.create(
    [
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
)

teams = Team.create(
    [
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
)

cracs = Crac.create(
    [
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
)

srcs = Src.create(
    [
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
)

equipment_states = EquipmentState.create(
    [
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
)

cleans = Clean.create(
    [
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
)

alarms = Alarm.create(
    [
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
)