import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/Button"

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap itens-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1 flex justify-center">
        <img src={offer} className="object-contain w-full" width={773} height={687} alt="offer" />
      </div>
      <div className="flex flex-1 flex-col">
				<h2 className="font-palanquin text-4xl capitalize font-bold">
        <span className="text-coral-red  mt-3">Special</span> Offer
					<br />
				</h2>
        <p className='mt-4 info-text'>
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className='mt-6 info-text'>
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="mt-11">
          <Button label="View Details" link='https://nike.com' iconUrl={arrowRight} />
        </div>
			</div>
    </section>
  )
}

export default SpecialOffer