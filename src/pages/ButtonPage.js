import Button from '../components/Button';
import { FaBeer } from 'react-icons/fa';

function App() {
  return (
    <div>
      <div>
        <Button>HAHAH</Button>
      </div>
      <div>
        <Button primary rounded outline>
          <FaBeer />
          HAHAH
        </Button>
      </div>
      <div>
        <Button secondary outline>
          <FaBeer />
          ASDF
        </Button>
      </div>

      <div>
        <Button danger outline>
          <FaBeer />
          Hi there!!{' '}
        </Button>
      </div>

      <div>
        <Button warning outline>
          Happy
        </Button>
      </div>
      <div>
        <Button success rounded>
          Happy
        </Button>
      </div>
    </div>
  );
}
export default App;
