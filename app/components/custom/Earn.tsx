import TypewriterTicker from "../magicui/typewriter-effect";
import { NumberTicker } from "../magicui/number-ticker";

export default function Example() {
  return (
    <div className="flex flex-col items-center space-y-6 p-4">
      <TypewriterTicker />
      <div className="flex flex-row justify-center gap-12">
       
        <div className="flex flex-col items-start">
          <NumberTicker
            value={45000}
            className="text-8xl font-bold"
            style={{ color: '#862828' }}
          />
          <p className="text-gray-700 text-lg mt-2 text-left">Клиенты</p>
        </div>
         <div className="flex flex-col items-start">
          <NumberTicker
            value={27} 
            className="text-8xl font-bold"
            style={{ color: '#862828' }}
            
          />
          <p className="text-gray-700 text-lg mt-2 text-left">Партнёры</p>
        </div>
        <div className="flex flex-col items-start">
          <NumberTicker
            value={40000}
            className="text-8xl font-bold"
            style={{ color: '#862828' }}
          />
          <p className="text-gray-700 text-lg mt-2 text-left">Отзывы</p>
        </div>
      </div>
    </div>
  );
}