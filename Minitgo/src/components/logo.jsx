// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.css';

// Import the Minitgo image (assuming it's an image)
import Minitgo from '../components/images/minitgo.png';

// Define the Logo component
export default function Logo() {
  return (
    <span className="brand">
      {/* Display the Minitgo image */}
      <img style={{width:'160px'}} src={Minitgo} alt="Minitgo Logo" />
    </span>
  );
}
