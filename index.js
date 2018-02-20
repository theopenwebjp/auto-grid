class AutoGrid{
    constructor(options={}){
        this.status = {
            wrapper: null,
            indexAdder: 1,
            objectFit: 'fill'
        };

        this.initialize(options);

        this.add = this.add.bind(this);
        this.addMock = this.addMock.bind(this);
        this.remove = this.remove.bind(this);
    }

    /**
     * Initialize environment.
     * Pass wrapper element here.
     * @param {Object} options 
     */
    initialize(options={}){
        
        //Options
        this.status.wrapper = options.wrapper || document.body;
        this.status.indexAdder = (options.indexAdder !== undefined) ? options.indexAdder : this.status.indexAdder;
        this.status.objectFit = (!!options.objectFit) ? options.objectFit : this.status.objectFit;

        //Initialization
        this.status.wrapper.setAttribute('data-auto-grid', true);
        this.status.wrapper.style.display = 'grid';
    }

    /**
     * Adds element and then resizes.
     * @param {DOMElement} element 
     */
    add(element){
        const s = element.style;
        s.display = 'block';
        s.minWidth = 0;
        s.minHeight = 0;
        s.width = '100%';
        s.height = '100%';
        s.objectFit = this.status.objectFit;

        this.status.wrapper.appendChild(element);
        this._resize();

        return this;
    }

    /**
     * Adds simple element for testing.
     */
    addMock(){
        const curNum = (this.status.wrapper.children.length - 1) + this.status.indexAdder;
        const text = `Text: ${curNum}`;

        const el = document.createElement('div');
        el.setAttribute('title', text);
        el.style.backgroundColor = 'orange';
        el.style.border = '1px solid white';

        this.add(el);

        return this;
    }

    /**
     * Removes element and then resizes.
     * @param {*} key See below.
     */
    remove(key){
        let element = null;

        //Selector
        if(typeof key === 'string'){
            element = this.status.wrapper.querySelector(key);
        }
        
        //Number(unless changed, starts from 1)
        else if(typeof key === 'number'){
            element = this.status.wrapper.children[key - this.status.indexAdder];
        }
        
        //Array: [x, y] using indexes starting from 1 unless changed.
        else if(Array.isArray(key) && key.length === 2){
            //TO DO
        }
        
        //Falsy(null, undefined, false)
        else if(key === null || key === undefined || key === false){
            const children = this.status.wrapper.children;
            element = children[children.length - 1];
        }
        
        //DOM Element
        else{
            element = key;
        }

        if(element){
            element.parentElement.removeChild(element);
        }else{
            throw new Error('Unexpected error on remove');
        }

        this._resize();

        return this;
    }

    _resize(){
        const wrapper = this.status.wrapper;
        const width = wrapper.getBoundingClientRect().width;
        const height = wrapper.getBoundingClientRect().height;

        const count = wrapper.children.length;
        const oneDimLength = Math.ceil(Math.sqrt(count));
        const oneDimStr = '1fr '.repeat(oneDimLength).trim();

        wrapper.style.gridTemplateColumns = oneDimStr;
        wrapper.style.gridTemplateRows = oneDimStr;
    }
}

if(typeof window === 'object'){
    window.AutoGrid = AutoGrid;
}
if(typeof module === 'object'){
    module.exports = AutoGrid;
}