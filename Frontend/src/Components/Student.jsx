import PropTypes from 'prop-types'
function Student(props){
    return(
        <div>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes" : "No"}</p>
            <hr></hr>
        </div>

    )
}
Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}
Student.defaultProps = {
    name: 'Guest',
    age: 0,
    isStudent: false,
}
export default Student;