# language: no
Egenskap: Forside

  Scenario: Test at søk funker
    Gitt at person med brukernavn "test@test.no" er logget inn
    Når personen går til søkesiden
    Når personen søker etter test
    Så skal personen se at ingen resultat vises
