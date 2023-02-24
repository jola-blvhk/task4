import './thirdsection.styles.css'
import Plan from './plan/plan.component';
function ThirdSection(){
    return(
        <section className='thirdsection'>
            <div>
        <h2>Choose Your Plan</h2>
        <p>Let's choose the package that is best for you and explore it happily and cheerfully.</p>
            </div>
            <div className='plans'>
                <Plan planname="Free Plan" price="Free"/>
                <Plan  planname="Standard Plan" price="$9 / mo"/>
                <Plan planname="Premium Plan" price="$12 / mo"/>
            </div>
        </section>
    ) 
}

export default ThirdSection;
