# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

generators = Generator.create!(
    [
        {
            id: 1,
            time: "7:15am",
            date: "03/3/2023",
            name: "generator 1",
            runtime: 25.1,
            temperature: 25.1,
            battery_charge: 27.9,
            fuel_level: 2116,
            shift: "day",
            team_id: 1,        
        },
        {
            id: 2,
            time: "7:15am",
            date: "03/3/2023",
            name: "generator 2",
            runtime: 25.1,
            temperature: 25.1,
            battery_charge: 27.9,
            fuel_level: 2116,
            shift: "day",
            team_id: 1,        
        },
        {
            id: 3,
            time: "7:15am",
            date: "03/3/2023",
            name: "generator 3",
            runtime: 25.1,
            temperature: 25.1,
            battery_charge: 27.9,
            fuel_level: 2116,
            shift: "day",
            team_id: 1,        
        },
    ]
)

ups = Up.create!(
    [
        {
            id: 1,
            time: "8:00pm",
            date: "03/3/2023",
            shift: "day",
            team_id: 1,
            name: "UPSA",
            voltage_L1L2: 415.0,
            voltage_L2L3: 415.0,
            voltage_L3L1: 415.0,
            output_voltage_L1N: 240.0,
            output_voltage_L2N: 240.0,
            output_voltage_L3N: 240.0,
            load_current_L1: 18.0,
            load_current_L2: 18.0,
            load_current_L3: 18.0,
            faulty_modules: 0,
        },
        {
            id: 2,
            time: "8:00pm",
            date: "03/3/2023",
            shift: "day",
            team_id: 1,
            name: "MUPS",
            voltage_L1L2: 415.0,
            voltage_L2L3: 415.0,
            voltage_L3L1: 415.0,
            output_voltage_L1N: 240.0,
            output_voltage_L2N: 240.0,
            output_voltage_L3N: 240.0,
            load_current_L1: 18.0,
            load_current_L2: 18.0,
            load_current_L3: 18.0,
            faulty_modules: 0,
        },
        {
            id: 3,
            time: "8:00pm",
            date: "03/3/2023",
            shift: "day",
            team_id: 1,
            name: "UPSB",
            voltage_L1L2: 415.0,
            voltage_L2L3: 415.0,
            voltage_L3L1: 415.0,
            output_voltage_L1N: 240.0,
            output_voltage_L2N: 240.0,
            output_voltage_L3N: 240.0,
            load_current_L1: 18.0,
            load_current_L2: 18.0,
            load_current_L3: 18.0,
            faulty_modules: 0,
        },
    ]
)

temperatures = Temperature.create!(
    [
        {
            id: 1,
            time: "8:00pm",
            date: "03/3/2023",
            shift: "day",
            team_id: 1,
            ups_a: 25.0,
            ups_b: 25.0,
            mdb_a: 23.0,
            mdb_b: 23.0,
            data_hall: 23.0,
            battery_a: 18.0,
            battery_b: 25.0,
        },
        {
            id: 2,
            time: "8:00pm",
            date: "03/3/2023",
            shift: "day",
            team_id: 1,
            ups_a: 25.0,
            ups_b: 25.0,
            mdb_a: 23.0,
            mdb_b: 23.0,
            data_hall: 23.0,
            battery_a: 18.0,
            battery_b: 25.0,
        },
        {
            id: 3,
            time: "8:00pm",
            date: "03/3/2023",
            shift: "day",
            team_id: 1,
            ups_a: 25.0,
            ups_b: 25.0,
            mdb_a: 23.0,
            mdb_b: 23.0,
            data_hall: 23.0,
            battery_a: 18.0,
            battery_b: 25.0,
        },
    ]
)

teams = Team.create!(
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

cracs = Crac.create!(
    [
        {
            id: 1,
            time: "8:00pm",
            date: "3/02/2023",
            shift: "day",
            name: "CRAC 1",
            status: "okay",
            team_id: 1,
            note: "okay"
        },
        {
            id: 2,
            time: "8:00pm",
            date: "3/02/2023",
            shift: "day",
            name: "CRAC 2",
            status: "okay",
            team_id: 1,
            note: "okay"
        },
        {
            id: 3,
            time: "8:00pm",
            date: "3/02/2023",
            shift: "day",
            name: "CRAC 3",
            status: "okay",
            team_id: 1,
            note: "okay"
        },
    ]
)

srcs = Src.create!(
    [
        {
            id: 1,
            time: "8:00pm",
            date: "3/03/2023",
            team_id: 1,
            shift: "day",
            name: "battA A/C1",
            status: "okay",
            note: "okay"
        },
        {
            id: 2,
            time: "8:00pm",
            date: "3/03/2023",
            team_id: 1,
            shift: "day",
            name: "battA A/C2",
            status: "okay",
            note: "okay"
        },
        {
            id: 3,
            time: "8:00pm",
            date: "3/03/2023",
            team_id: 1,
            shift: "day",
            name: "battB A/C1",
            status: "okay",
            note: "okay"
        },
        {
            id: 4,
            time: "8:00pm",
            date: "3/03/2023",
            team_id: 1,
            shift: "day",
            name: "battB A/C2",
            status: "okay",
            note: "okay"
        },
    ]
)

equipment_states = EquipmentState.create!(
    [
        {
            id: 1,
            time: "8:00pm",
            date: "3/03/2023",
            team_id: 1,
            shift: "day",
            name: "condensor",
            status: "okay"
        },
        {
            id: 2,
            time: "8:00pm",
            date: "3/03/2023",
            team_id: 1,
            shift: "day",
            name: "cabinets",
            status: "okay"
        },
        {
            id: 3,
            time: "8:00pm",
            date: "3/03/2023",
            team_id: 1,
            shift: "day",
            name: "vesda",
            status: "okay"
        },
    ]
)

cleans = Clean.create!(
    [
        {
            id: 1,
            time: "8:00pm",
            date: "3/03/2023",
            team_id: 1,
            shift: "day",
            room: "datahall",
            status: "okay",
            note: "okay"
        },
        {
            id: 2,
            time: "8:00pm",
            date: "3/03/2023",
            team_id: 1,
            shift: "day",
            room: "MDB A",
            status: "okay",
            note: "okay"
        },
        {
            id: 3,
            time: "8:00pm",
            date: "3/03/2023",
            team_id: 1,
            shift: "day",
            room: "MDB B",
            status: "okay",
            note: "okay"
        },
    ]
)

alarms = Alarm.create!(
    [
        {
            id: 1,
            time: "8:00pm",
            date: "3/03/2023",
            team_id: 1,
            shift: "day",
            name: "transducer unresponsive",
            category: "info alarm",
            root_cause: "power loss",
            action_taken: "acknowledged",
            reason_uncleared: "keeps coming"
        },
        {
            id: 2,
            time: "8:00pm",
            date: "3/03/2023",
            team_id: 1,
            shift: "day",
            name: "transducer unresponsive",
            category: "info alarm",
            root_cause: "power loss",
            action_taken: "acknowledged",
            reason_uncleared: "keeps coming"
        },
        {
            id: 3,
            time: "8:00pm",
            date: "3/03/2023",
            team_id: 1,
            shift: "day",
            name: "transducer unresponsive",
            category: "info alarm",
            root_cause: "power loss",
            action_taken: "acknowledged",
            reason_uncleared: "keeps coming"
        },
    ]
)