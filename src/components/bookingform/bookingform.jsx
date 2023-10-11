
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useFormHelper } from '../../hooks/useFormHelper';


export default function BookingForm() {

  const {
    formState,
    setFormState,
    createInputElement,
    formIsValid,
  } = useFormHelper();

  // debug
  console.log(JSON.stringify(formState, '', '  '));

  function doAfterSend(serverResponse) {
    console.log('serverResponse', serverResponse);
  }

  return <>
    <>


      <form onSubmit={event => sendForm({
        event,
        route: 'users',
        body: formState,
        callback: doAfterSend
      })}>
        <Row>
          <Col sm={true}>
            <div className='bg-secondary rounded p-3 mt-3'>
              <h2>Dina uppgifter</h2>
              {[

              
                ['input', 'email', 'E-post', { type: 'email' }],


              ].map(elData => createInputElement(...elData))

              }</div></Col>
        </Row>



        <Row>
          <Col className='mt-3 mb-3'>{[

            ['button', '_submit', '', {
              type: 'submit',
              className: !formIsValid ? 'can-not-submit' : '',
              nolabel: true
            }, 'Boka'],

            ['button', '_reset', '', {
              type: 'reset',
              onClick: () => setFormState({}),
              className: 'btn-secondary mx-3',
              nolabel: true
            }, 'Töm fälten']

          ].map(elData => createInputElement(...elData))
          }</Col>
        </Row>

      </form>
    </>
  </>;
}



