import { useCounter, useFetch } from "../hooks";
import { LoadingQuote, Quote } from "../03-examples";

export const Layout = () => {

    const { increment, counter } = useCounter(1)

    const { data, isLoading, hasError } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`);
    return (
    <>
        <h1>BreakingBad Quotes</h1>
        <hr />

        {
            (isLoading 
                ?  (
                    <LoadingQuote />
                ) 
                : data.map((itemQuote, key) => 
                    <Quote itemQuote={itemQuote} key={key}/>        
                ))
        }

        <button className="btn btn-primary" onClick={() => increment(1)}>
            Next quote
        </button>
       

       
    </>
  )
}
