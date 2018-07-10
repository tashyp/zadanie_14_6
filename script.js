/*
var Counter = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },

    render: function() {
        return React.createElement('div', {},
            React.createElement('span', {}, 'Licznik ' + this.state.counter)
        );
    }
});

var element = React.createElement(Counter);
ReactDOM.render(element, document.getElementById('app'));


var Counter = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    render: function() {
        return React.createElement('div', {onClick: this.increment},
            React.createElement('span', {}, 'Licznik ' + this.state.counter)
        );
    }
});
*/
var Counter = React.createClass({
    getInitialState: function () {
        return {
            counter: 0
        };
    },

    increment: function () {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function () {
        this.setState({
            counter: this.state.counter - 1
        });
    },

    getDefaultProps: function () {
        console.log('ustawia domyślne wartości propsów (które nie zostały przekazane do komponentu)');
    },

    componentWillMount: function () {
        console.log('Wywoływane tylko w momencie inicjalizacji komponentu');
    },

    componentDidMount: function () {
        console.log('Komponent zamontowany jest w drzewie DOM i można na nim dokonywać różnych manipulacji');
    },

    componentWillReceiveProps: function () {
        console.log('Zostanie wywołana tylko wtedy, gdy komponent otrzyma nowe właściwości');
    },

    shouldComponentUpdate: function () {
        console.log('Sprawdza czy faktycznie trzeba jeszcze raz przerysować komponent');
        return true;
    },

    componentWillUpdate: function () {
        console.log('Powinna zostać wywoływana tylko do przygotowania na nadchodzące zmiany');
    },

    componentDidUpdate: function () {
        console.log('Można wykonac manipulacje drzewa DOM');
    },

    componentWillUnmount: function () {
        console.log('Sprzątanie czyli odpinanie timerów czy nasłuchiwania zdarzeń na elementach DOM');
    },

    render: function () {
        return React.createElement('div', { className: 'container' },
            React.createElement('button', {
                className: 'btn btn-warning',
                onClick: this.decrement
            }, 'Substract (-1)'),
            React.createElement('span', {}, 'Result: ' + this.state.counter),
            React.createElement('button', {
                className: 'btn btn-info',
                onClick: this.increment
            }, 'Add (+1)'),
        );
    }
});

var element = React.createElement('div', {},
    React.createElement('h1', {}, 'Add or substract?'),
    React.createElement('h3', {}, 'Just click the button below'),
    React.createElement(Counter, {}),
    React.createElement(Counter, {}),
    React.createElement(Counter, {}),
    React.createElement(Counter, {}),
    React.createElement(Counter, {})
);
ReactDOM.render(element, document.getElementById('app'));