<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Send email</title>
</head>
<body>
    <?php
    class mail {
    /**
     * Indicates if the connection to the mail server requires
authentication
     * @var <boolean>
*/
    private $authentication = true;
    /**
     * Indicates the host where the connection to the mail server will be
made.
     * @var <string>
*/
    private $host = '192.168.1.33';
    /**
     * Specifies the user to be used for authentication with the mail
server.
     * @var <string>
*/
    private $user = 'user';
    /**
     * Specifies the password to be used for authentication with the mail
server.
     * @var <string>
     */
    private $password = 'pAss12345';
    public function __construct()
    {
    }zzz
/**
 * Send the email
     * @param <string> $to Is the recipient's email address
     * @param <string> $subject This is the subject of the message.
     * @param <string> $body Is the message body
     * @param <boolean> $is_html Indicates if the message body is in html
format
     * @param <array> $para_cc An array of email addresses for Cc copy.
     * @param <array> $para_bcc An array of email addresses for copy Bcc
     * @return <boolean> Returns true if email is sent and throws an
exception on failure
     */
    private function sendEmail($to, $subject, $body, $is_html = false,
Array $para_cc = array() , Array $para_bcc = array())
{
        //... Sends the email and returns true if everything went well or
throws an exception if it fails
}}
?>
</body>
</html>