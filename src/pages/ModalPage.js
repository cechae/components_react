import Modal from '../components/Modal';
import Button from '../components/Button';
import { useState } from 'react';

function ModalPage() {
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => {
    setShowModal(true);
  };
  const handleClose = () => {
    setShowModal(false);
  };
  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>
        I Accept
      </Button>
    </div>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is agreement for you to accept.</p>
    </Modal>
  );

  return (
    <div>
      <Button onClick={handleClick} primary>
        Open modal
      </Button>
      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac aliquam
        metus, ac vestibulum erat. In suscipit, elit quis ornare lacinia, sapien
        lacus sagittis arcu, ut luctus lectus leo ac orci. Nulla fermentum ante
        nibh, sed ultricies massa porttitor dapibus. Integer rhoncus purus non
        mattis gravida. Sed sollicitudin, lacus ut imperdiet convallis, sem nisi
        venenatis risus, sed bibendum est enim vitae ligula. Maecenas rhoncus
        tristique ipsum, eu consectetur tellus faucibus nec. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Suspendisse interdum enim ac
        massa bibendum facilisis. Nullam sed elit consequat, pellentesque nulla
        id, consectetur erat. Integer in molestie purus, vel imperdiet orci. Nam
        dignissim, neque et vestibulum vehicula, diam dui blandit lacus, quis
        vestibulum urna purus a velit. Quisque ultrices porta odio, in venenatis
        turpis efficitur ut. Aenean mollis lorem sed cursus porta.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac aliquam
        metus, ac vestibulum erat. In suscipit, elit quis ornare lacinia, sapien
        lacus sagittis arcu, ut luctus lectus leo ac orci. Nulla fermentum ante
        nibh, sed ultricies massa porttitor dapibus. Integer rhoncus purus non
        mattis gravida. Sed sollicitudin, lacus ut imperdiet convallis, sem nisi
        venenatis risus, sed bibendum est enim vitae ligula. Maecenas rhoncus
        tristique ipsum, eu consectetur tellus faucibus nec. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Suspendisse interdum enim ac
        massa bibendum facilisis. Nullam sed elit consequat, pellentesque nulla
        id, consectetur erat. Integer in molestie purus, vel imperdiet orci. Nam
        dignissim, neque et vestibulum vehicula, diam dui blandit lacus, quis
        vestibulum urna purus a velit. Quisque ultrices porta odio, in venenatis
        turpis efficitur ut. Aenean mollis lorem sed cursus porta.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac aliquam
        metus, ac vestibulum erat. In suscipit, elit quis ornare lacinia, sapien
        lacus sagittis arcu, ut luctus lectus leo ac orci. Nulla fermentum ante
        nibh, sed ultricies massa porttitor dapibus. Integer rhoncus purus non
        mattis gravida. Sed sollicitudin, lacus ut imperdiet convallis, sem nisi
        venenatis risus, sed bibendum est enim vitae ligula. Maecenas rhoncus
        tristique ipsum, eu consectetur tellus faucibus nec. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Suspendisse interdum enim ac
        massa bibendum facilisis. Nullam sed elit consequat, pellentesque nulla
        id, consectetur erat. Integer in molestie purus, vel imperdiet orci. Nam
        dignissim, neque et vestibulum vehicula, diam dui blandit lacus, quis
        vestibulum urna purus a velit. Quisque ultrices porta odio, in venenatis
        turpis efficitur ut. Aenean mollis lorem sed cursus porta.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac aliquam
        metus, ac vestibulum erat. In suscipit, elit quis ornare lacinia, sapien
        lacus sagittis arcu, ut luctus lectus leo ac orci. Nulla fermentum ante
        nibh, sed ultricies massa porttitor dapibus. Integer rhoncus purus non
        mattis gravida. Sed sollicitudin, lacus ut imperdiet convallis, sem nisi
        venenatis risus, sed bibendum est enim vitae ligula. Maecenas rhoncus
        tristique ipsum, eu consectetur tellus faucibus nec. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Suspendisse interdum enim ac
        massa bibendum facilisis. Nullam sed elit consequat, pellentesque nulla
        id, consectetur erat. Integer in molestie purus, vel imperdiet orci. Nam
        dignissim, neque et vestibulum vehicula, diam dui blandit lacus, quis
        vestibulum urna purus a velit. Quisque ultrices porta odio, in venenatis
        turpis efficitur ut. Aenean mollis lorem sed cursus porta.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac aliquam
        metus, ac vestibulum erat. In suscipit, elit quis ornare lacinia, sapien
        lacus sagittis arcu, ut luctus lectus leo ac orci. Nulla fermentum ante
        nibh, sed ultricies massa porttitor dapibus. Integer rhoncus purus non
        mattis gravida. Sed sollicitudin, lacus ut imperdiet convallis, sem nisi
        venenatis risus, sed bibendum est enim vitae ligula. Maecenas rhoncus
        tristique ipsum, eu consectetur tellus faucibus nec. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Suspendisse interdum enim ac
        massa bibendum facilisis. Nullam sed elit consequat, pellentesque nulla
        id, consectetur erat. Integer in molestie purus, vel imperdiet orci. Nam
        dignissim, neque et vestibulum vehicula, diam dui blandit lacus, quis
        vestibulum urna purus a velit. Quisque ultrices porta odio, in venenatis
        turpis efficitur ut. Aenean mollis lorem sed cursus porta.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac aliquam
        metus, ac vestibulum erat. In suscipit, elit quis ornare lacinia, sapien
        lacus sagittis arcu, ut luctus lectus leo ac orci. Nulla fermentum ante
        nibh, sed ultricies massa porttitor dapibus. Integer rhoncus purus non
        mattis gravida. Sed sollicitudin, lacus ut imperdiet convallis, sem nisi
        venenatis risus, sed bibendum est enim vitae ligula. Maecenas rhoncus
        tristique ipsum, eu consectetur tellus faucibus nec. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Suspendisse interdum enim ac
        massa bibendum facilisis. Nullam sed elit consequat, pellentesque nulla
        id, consectetur erat. Integer in molestie purus, vel imperdiet orci. Nam
        dignissim, neque et vestibulum vehicula, diam dui blandit lacus, quis
        vestibulum urna purus a velit. Quisque ultrices porta odio, in venenatis
        turpis efficitur ut. Aenean mollis lorem sed cursus porta.
      </p>
    </div>
  );
}
export default ModalPage;
