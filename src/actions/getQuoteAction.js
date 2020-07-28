import FamousQuote from '../util/FamousQuote';



const REQUESTING_DATA = 'REQUESTING_DATA'
const RECEIVED_DATA = 'RECEIVED_DATA'

const requestingData = () => { return { type: REQUESTING_DATA } }
const receivedData = (response) => {
    return { type: RECEIVED_DATA, quote: response }
}

export const getQuoteAction = () => {
    return (dispatch) => {
        // dispatch request action here
        dispatch(requestingData());
        //async API call, return the promise
        return FamousQuote.getQuote().then(
            response => {
                console.log(response);
                dispatch(receivedData(response));
            }
        )


    }
};

