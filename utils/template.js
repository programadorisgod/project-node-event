export const html = (price) => `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>Confirmación de Compra</title>
</head>
<body style="font-family: Arial, sans-serif; background-color: #f0f0f0; margin: 0; padding: 20px;">
    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; margin: 0 auto; background-color: #ffffff;">
        <tr>
            <td align="center" style="padding: 40px 20px; text-align: center;">
                <p style="color: #ff6b6b; font-weight: bold; margin-bottom: 20px;">No responder a este correo</p>
                <p style="font-size: 18px; margin-bottom: 20px;">Compraste tickets por el precio de $${price}</p>
                <p style="font-size: 24px; color: #4ecdc4; font-weight: bold; text-transform: uppercase; letter-spacing: 2px;">¡Algo bien bacano primo hermano!</p>
            </td>
        </tr>
    </table>
</body>
</html>`