class PasswordChecker {
    constructor(text)
    {
        this.text = text;
    }
    getChecks()
    {
        return [{"label": "At least one Lowercase letter",
        "checksOut":(new RegExp("[a-z]")).test(this.text)
    },
    {"label": "At least one Uppercase letter",
        "checksOut":(new RegExp("[A-Z]")).test(this.text)
    },
    {"label": "At least one Special letter",
        "checksOut": (new RegExp("[$@$!%*#?&\\[\\]\\(\\)]")).test(this.text)
    },
    {"label": "At least one Number letter",
        "checksOut": (new RegExp("[0-9]")).test(this.text)
    },
    {"label": "At least 12 letters",
        "checksOut": (this.text.length >= 12)
    }];
    }

}