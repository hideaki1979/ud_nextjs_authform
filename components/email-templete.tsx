interface EmailTempleteProps {
    username: string;
    email: string;
    content: string;
}

export const EmailTemplete: React.FC<Readonly<EmailTempleteProps>> = ({ username, email, content }) => {
    return (
        <div style={{
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
            maxWidth: '600px',
            margin: '0 auto',
            padding: '20px',
            backgroundColor: '#ffffff',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
            color: '#333333'
        }}>
            <table width="100%" cellPadding="0" cellSpacing="0" style={{ borderCollapse: 'collapse' }}>
                <tr>
                    <td style={{
                        textAlign: 'center',
                        padding: '20px 0',
                        backgroundColor: '#f8f9fa',
                        borderRadius: '8px 8px 0 0'
                    }}>
                        <h1 style={{
                            margin: '0',
                            fontSize: '24px',
                            color: '#2463c9',
                            fontWeight: '600'
                        }}>
                            お問い合わせがありました
                        </h1>
                    </td>
                </tr>
                <tr>
                    <td style={{ padding: '20px' }}>
                        <div>
                            <h1 style={{
                                margin: '0 0 5px 0',
                                fontWeight: '600'
                            }}>
                                こんにちは、{username}です。
                            </h1>
                            <p style={{
                                fontSize: '14px',
                                margin: '8px 0',
                                color: '#666666'
                            }}>
                                {email}から届きました。
                            </p>
                        </div>
                        <div>
                            <h2 style={{
                                fontSize: '20px',
                                margin: '0 0 10px 0',
                                color: '#374151'
                            }}>
                                メッセージ内容：
                            </h2>
                            <p style={{
                                margin: '0',
                                lineHeight: '1.6',
                                whiteSpace: 'pre-wrap'
                            }}>
                                {content}
                            </p>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td style={{
                        textAlign: 'center',
                        padding: '15px',
                        backgroundColor: '#f1f5f9',
                        borderRadius: '0 0 8px 8px',
                        fontSize: '14px',
                        color: '#64748b'
                    }}>
                        <p style={{ margin: 0 }}>
                            このメールは自動送信システムによって送信されています。
                        </p>
                    </td>
                </tr>
            </table>
        </div>
    )
}