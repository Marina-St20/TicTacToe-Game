function StatusMessage({ message }) {

    {console.log(message)}

    return (
        <label className = "status-mes">
            {message}
        </label>
    )
}

export default StatusMessage;