
export const Message = ({name,content})  => {


    return (
        <li
            className="msg"
        >
            <span
                className="msg-user"
            >
                {name}
            </span>
            <p
                className="msg-content"
            >
                {content}
            </p>
        </li>

    )
  }