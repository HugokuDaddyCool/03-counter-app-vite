import PropTypes from 'prop-types';

const newMessage = {
    message: 'hola mundo',
    title:'yo'
};

const FirstApp = ({ title, subTitle = 'la tierra explota!' }) => {
    //console.log(title);
    return (
        <>
            <h1>{ title }</h1>
            {/* <h1>{ JSON.stringify(newMessage) }</h1> */}
            <p>{ subTitle + 1}</p>
        </>
    );
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.number
}

FirstApp.defaultProps = {
    name: 'victor',
    subTitle: 'tampoco esto',
    title: 'No hay titulo',
}

const getGreeting = () => {
    return 'Hola Mundo'
}

export {
    FirstApp
}