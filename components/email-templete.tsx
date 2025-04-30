interface EmailTempleteProps {
    username: string;
    email: string;
    content: string;
}

export const EmailTemplete: React.FC<Readonly<EmailTempleteProps>> = ({ username, email, content }) => {
    return (
        <div>
            <h1>こんにちは、{username}です。</h1>
            <p>{email}から届きました。</p>
            <p>{content}</p>
        </div>
    )
}