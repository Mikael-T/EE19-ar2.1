'use strict';

/**
 * Dependencies
 */
 import fetch from 'node-fetch'

/**
 * Mail service class
 */
class MailService {

    /**
     * Constructor
     */
    constructor() {
        this.apiKey = '';
        this.endpoint = 'https://api.sendgrid.com/v3/mail/send';
    }

    /**
     * SendGrid API key passthrough for convenience.
     */
    setApiKey(apiKey) {
        this.apiKey = apiKey;
    }

    /**
     * Send email
     */
    async send({ to, from, subject, text, html }) {
        const response = await fetch(this.endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${this.apiKey}`
            },
            body: JSON.stringify({
                personalizations: [
                    {
                        to: [
                            {
                                email: to
                            }
                        ],
                        subject: subject
                    }
                ],
                from: from,
                content: [
                    {
                        type: "text/plain",
                        value: text
                    },
                    {
                        type: 'text/html',
                        value: html
                    }
                ]
            })
        });
        return response;
    }
}

//Export class
export default MailService;