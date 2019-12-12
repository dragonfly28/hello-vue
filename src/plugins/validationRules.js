export default {
    install(Vue, options) {
        // eslint Workaround
        if(options);

        let RULE_SET = {
            // Einzelne Regeln
            REQUIRED: [v => !!v || 'Feld muss befüllt werden'],
            NOSPACES: [v => (v || '').indexOf(' ') < 0 || 'Keine Leerzeichen erlaubt'],
            ONLYNUMBERS:  [v => ( !v || /^([0-9]+)$/.test(v)) || "Feld darf nur Zahlen enthalten"],   
             // Eine Telefonnummer beginnt mit Null oder Klammer auf oder einem Pluszeichen,
            // gefolgt von Ziffern, Punkten, Bindestrichen, runden Klammern, Schrägstrichen.
            // Mindestens 7 Zeichen müssen es insgesamt sein.
            // Telefonnummern ohne Vorwahl werden nicht akzeptiert.
            PHONENUMBER: [v => ( !v || /^([0(+][0-9\\.-\\/ ()]{7,})$/.test(v)) || "Vorwahl beginnend mit 0 ( oder + gefolgt von Leerstellen 0-9 . (  ) - /"],
            EMAIL: [v => ( !v ||  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) || "Email ungültig"], // Aufbau: _@_._

            // Zusammengehaengte Regeln müssen als Funktion definiert werden, da sonst kein Zugriff auf andere Werte innerhalb des gleichen Objektes erfolgen kann
              REQNOSPACE: function () {
                return [this.REQUIRED[0], this.NOSPACES[0]]
            },            
        };

        Vue.prototype.$getRule = (key) => {
            // Ueberpruefung ob der entsprechende Wert eine Funktion oder ein Objekt / Array ist, damit in den vue Komponenten der Aufruf immer gleich ist
            if ( RULE_SET[key] instanceof Function) {
                return RULE_SET[key]();
            } else {
                return RULE_SET[key];
            }
        }


    }
}