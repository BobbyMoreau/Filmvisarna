import emailContent from "./emailContent.js";



const htmlTemplate = (emailContent) => 
`<!DOCTYPE html>
    <html>
    
    <head>

        <style>
            body {
                font-family: Arial, sans-serif;
                font-size: 18px;
                padding: 20px;
            }
        </style>
    </head>
    
    <body style="background-color: #181619;">
        <header style="text-align: center; background-color: #DDA74F; padding: 5px;">
            <h1 style="color: #181619;">Tack för din bokning!</h1>
            <h3 style="color: #181619;">Här kommer din bokningsbekräftelse</h3>
            <hr style="margin-top: 20px; border: 1px solid #DDA74F;" />
        </header>
        <hr style="border: 1px solid #DDA74F; margin-bottom: 10px;" />
    
        <table style="text-align: left; color: #DDA74F; margin-top: 50px; padding: 20px;">
            <tr>
                <td style="vertical-align: top; width: 20%;">
                    <img 
                        style="display: block; margin-right: 10px;"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3luCZ5wGZkhPfM7aUByTJcYj8T0tcmvYLWw&usqp=CAU" 
                        alt="A Group of Ring-tailed Lemurs" 
                        width="150px"
                        height="200px"
                    />
                </td>
                <td style="vertical-align: top; width: 80%;">
                    <table>
                        <tr>
                            <th>&nbsp;</th>
                            <th style="margin: 10px;">
                                <b>Titel:</b>
                            </th>
                            <td>
                                ${emailContent.title}
                            </td>
                        </tr>
                        <tr>
                            <th>&nbsp;</th>
                            <th>
                                <b>Datum:</b>
                            </th>
                            <td>
                                ${emailContent.date.toLocaleString('sv-SE').slice(0, -3)}
                            </td>
                        </tr>
                        <tr>
                            <th>&nbsp;</th>
                            <th>
                                <b>Biljetter:</b>
                            </th>
                            <td>
                                ${emailContent.ticketType}
                            </td>
                        </tr>
                        <tr>
                            <th>&nbsp;</th>
                            <th>
                                <b>Stolar:</b>
                            </th>
                            <td>
                                ${emailContent.seats}
                            </td>
                        </tr>
                        <tr>
                            <th>&nbsp;</th>
                            <th>
                                <b>Pris:</b>
                            </th>
                            <td>
                                ${emailContent.price}
                            </td>
                        </tr>
                        <tr>
                            <th>&nbsp;</th>
                            <th>
                                <b>Bokningsnummer:</b>
                            </th>
                            <td>
                                ${emailContent.bookingNo}
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
        <hr style="border: 1px solid #DDA74F; margin-top: 50px;" />
        <footer style="text-align: center; background-color: #DDA74F; color: #181619; padding: 10px;"><b>Filmvisarna AB</b></footer>
    </body>
    </html>`;

export default htmlTemplate;
