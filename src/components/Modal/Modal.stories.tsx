import { ComponentMeta, ComponentStory } from '@storybook/react-native';
import React from 'react';
import Box from '../Box/Box';
import Button from '../Button/Button';
import Text from '../Text/Text';
import Modal from './Modal';
import Image from '../Image/Image';
import { useWindowDimensions } from 'react-native';

const ModalMeta: ComponentMeta<typeof Modal> = {
  title: 'Modal',
  component: Modal,
  parameters: {
    isFullScreen: true,
    layout: 'centered',
    showPanel: false,
  },
};

export default ModalMeta;

type ModalStory = ComponentStory<typeof Modal>;

export const Basic: ModalStory = () => {
  const dims = useWindowDimensions();
  const [modal1, showModal1] = React.useState(false);
  const [modal2, showModal2] = React.useState(false);
  const [modal3, showModal3] = React.useState(false);
  const [modal4, showModal4] = React.useState(false);
  const [modal5, showModal5] = React.useState(false);
  const [modal6, showModal6] = React.useState(false);

  return (
    <>
      <Box borderRadius="l" p="m">
        <Text variant="subtitle1Bold" mb="l">
          Modal Examples
        </Text>
        <Button mb="m" filled label="Basic" onPress={() => showModal1(true)} />
        <Button
          mb="m"
          filled
          label="Non-Closable"
          onPress={() => showModal2(true)}
        />
        <Button
          mb="m"
          filled
          label="Actions Button"
          onPress={() => showModal3(true)}
        />
        <Button
          mb="m"
          filled
          label="Long Content"
          onPress={() => showModal4(true)}
        />
        <Button
          mb="m"
          filled
          label="Bottom Sticky"
          onPress={() => showModal5(true)}
        />
        <Button
          mb="m"
          filled
          label="Image Content"
          onPress={() => showModal6(true)}
        />
      </Box>
      <Modal
        modalKey="basic"
        visible={modal1}
        closable={true}
        title="Lorem ipsum dolor"
        closeButtonAction={() => showModal1(false)}>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi arcu
          accumsan nunc massa. Viverra id arcu convallis facilisi urna proin in.
          Sit sed velit elementum mattis laoreet nulla vitae at. Aenean justo
          nibh enim imperdiet commodo varius eleifend nec vel. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Facilisi arcu accumsan nunc
          massa.
        </Text>
      </Modal>
      <Modal
        modalKey="non-closable"
        visible={modal2}
        closable={false}
        title="Lorem ipsum dolor"
        closeButtonAction={() => showModal2(false)}>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi arcu
          accumsan nunc massa. Viverra id arcu convallis facilisi urna proin in.
          Sit sed velit elementum mattis laoreet nulla vitae at. Aenean justo
          nibh enim imperdiet commodo varius eleifend nec vel. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Facilisi arcu accumsan nunc
          massa.
        </Text>
      </Modal>
      <Modal
        modalKey="with-action"
        visible={modal3}
        closable={true}
        title="Lorem ipsum dolor"
        closeButtonAction={() => showModal3(false)}
        actionButtonProps={{
          label: 'Primary Action',
          onPress: () => {},
        }}
        secondActionButtonProps={{
          label: 'Secondary Action',
          onPress: () => {},
        }}>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi arcu
          accumsan nunc massa. Viverra id arcu convallis facilisi urna proin in.
          Sit sed velit elementum mattis laoreet nulla vitae at. Aenean justo
          nibh enim imperdiet commodo varius eleifend nec vel. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Facilisi arcu accumsan nunc
          massa.
        </Text>
      </Modal>
      <Modal
        modalKey="long-content"
        visible={modal4}
        closable={true}
        title="Lorem ipsum dolor"
        closeButtonAction={() => showModal4(false)}
        actionButtonProps={{
          label: 'Primary Action',
          onPress: () => {},
        }}
        secondActionButtonProps={{
          label: 'Secondary Action',
          onPress: () => {},
        }}>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi arcu
          accumsan nunc massa. Viverra id arcu convallis facilisi urna proin in.
          Sit sed velit elementum mattis laoreet nulla vitae at. Aenean justo
          nibh enim imperdiet commodo varius eleifend nec vel. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Facilisi arcu accumsan nunc
          massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Facilisi arcu accumsan nunc massa. Viverra id arcu convallis facilisi
          urna proin in. Sit sed velit elementum mattis laoreet nulla vitae at.
          Aenean justo nibh enim imperdiet commodo varius eleifend nec vel.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi arcu
          accumsan nunc massa. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Facilisi arcu accumsan nunc massa. Viverra id arcu
          convallis facilisi urna proin in. Sit sed velit elementum mattis
          laoreet nulla vitae at. Aenean justo nibh enim imperdiet commodo
          varius eleifend nec vel. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Facilisi arcu accumsan nunc massa. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Facilisi arcu accumsan nunc
          massa. Viverra id arcu convallis facilisi urna proin in. Sit sed velit
          elementum mattis laoreet nulla vitae at. Aenean justo nibh enim
          imperdiet commodo varius eleifend nec vel. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Facilisi arcu accumsan nunc massa. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Facilisi arcu
          accumsan nunc massa. Viverra id arcu convallis facilisi urna proin in.
          Sit sed velit elementum mattis laoreet nulla vitae at. Aenean justo
          nibh enim imperdiet commodo varius eleifend nec vel. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Facilisi arcu accumsan nunc
          massa.
        </Text>
      </Modal>
      <Modal
        modalKey="bottom"
        visible={modal5}
        closable={true}
        justifyContent="flex-end"
        title="Lorem ipsum dolor"
        closeButtonAction={() => showModal5(false)}
        actionButtonProps={{
          label: 'Primary Action',
          onPress: () => {},
        }}
        secondActionButtonProps={{
          label: 'Secondary Action',
          onPress: () => {},
        }}>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi arcu
          accumsan nunc massa. Viverra id arcu convallis facilisi urna proin in.
          Sit sed velit elementum mattis laoreet nulla vitae at. Aenean justo
          nibh enim imperdiet commodo varius eleifend nec vel. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Facilisi arcu accumsan nunc
          massa.
        </Text>
      </Modal>
      <Modal
        modalKey="image-content"
        visible={modal6}
        closable={true}
        title="Image Preview"
        closeButtonAction={() => showModal6(false)}>
        <Box alignItems="center">
          <Image
            height={dims.height * 0.6}
            width={dims.width - 72}
            resizeMode="cover"
            borderRadius={8}
            source={{
              uri: 'https://cdn.dsmcdn.com/ty1006/product/media/images/prod/PIM/20230927/18/a885ced6-7ac8-4ccf-8b58-108db99ed477/1_org_zoom.jpg',
            }}
          />
        </Box>
      </Modal>
    </>
  );
};
