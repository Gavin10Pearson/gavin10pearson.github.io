
let player = {
    _name: 'Wanderer',
    _health: 12,
    _might: 10,
    _agility: 10,
    _faith: 10,
    _esotericism: 10,
    _sanity: 10,

    get playerName(){
        if (this._name){
            return this._name;
        }else{
            return 'No name attribute';
        }
    },

    get playerHealth(){
        if (this._health){
            return this._health;
        }else{
            return 'No agility attribute';
        }
    },

    get playerMight(){
        if (this._might){
            return this._might;
        }else{
            return 'No might attribute';
        }
    },

    get playerAgility(){
        if (this._agility){
            return this._agility;
        }else{
            return 'No agility attribute';
        }
    },

    get playerFaith(){
        if (this._faith){
            return this._faith;
        }else{
            return 'No faith attribute';
        }
    },

    get playerEsotericism(){
        if (this._esotericism){
            return this._esotericism;
        }else{
            return 'No esotericism attribute';
        }
    },

    get playerSanity(){
        if (this._sanity){
            return this._sanity;
        }else{
            return 'No sanity attribute';
        }
    },

    set newName(name){
        if (typeof name === 'string'){
            this._name = name;
        }else{
            console.log('You must assign a string to name');
        }
    },

    showStats: function(){
        console.log(`Name: ${this._name}`);
        console.log(`Health: ${this._health}`);
        console.log(`Might: ${this._might}`);
        console.log(`Agility: ${this._agility}`);
        console.log(`Faith: ${this._faith}`);
        console.log(`Esotericism: ${this._esotericism}`);
        console.log(`Sanity: ${this._sanity}`);
    }

};

export {player};
