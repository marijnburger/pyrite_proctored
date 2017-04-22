// config.js
// =========
// constants for the application: configuration values & enums

// == config values ============================================================
angular.module('pyrite')
    .constant("appConfig", {
        "SURVEY_LIVE"         : false, //WARNING: be very careful with changing this
        "REQUIRE_CONSENT"     : true,
        "DO_CONSENT_REDIRECT" : false, //toggles redirect behavior that checks if user has consented
        "PROCTORED"           : false, //toggles alternate behavior on narrative response page for proctored experiments
        "PATH"                : "http://localhost:8080/"
    });

// == demographic values =======================================================
angular.module('pyrite')
    .constant("demographicValues", {
        "fields" : {
            0 : { "val" : "Select a field...", "disabled": true },
            1 : { "val" : "Arts & Sciences" },
            2 : { "val" : "Built Environments" },
            3 : { "val" : "Business" },
            4 : { "val" : "Dentistry" },
            5 : { "val" : "Education" },
            6 : { "val" : "Engineering" },
            7 : { "val" : "Environment" },
            8 : { "val" : "The Information School" },
            9 : { "val" : "Law" },
            10 : { "val" : "Medicine" },
            11 : { "val" : "Nursing" },
            12 : { "val" : "Ocean & Fishery Science" },
            13 : { "val" : "Pharmacy" },
            14 : { "val" : "Public Affairs" },
            15 : { "val" : "Public Health" },
            16 : { "val" : "ROTC" },
            17 : { "val" : "Social Work" },
            18 : { "val" : "Other:" }
        },
        "genders" : {
            0 : { "val" : "Select a gender...", "disabled": true },
            1 : { "val" : "Male" },
            2 : { "val" : "Female" },
            3 : { "val" : "Non-Binary" },
            4 : { "val" : "Prefer not to respond" }
        }
    });

// == likert values in database ================================================
// transforms readable likert response values in html doc to usable DB values
angular.module('pyrite')
    .constant("likertValuesDB", {
        "strongly-disagree" : 1,
        "disagree"          : 2,
        "somewhat-agree"    : 3,
        "neither"           : 4,
        "somewhat-agree"    : 5,
        "agree"             : 6,
        "strongly-agree"    : 7
    });
