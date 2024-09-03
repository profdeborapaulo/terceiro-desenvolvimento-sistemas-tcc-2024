import React from 'react';
import { View, Image } from 'react-native';
import ImageResizer from 'react-native-image-resizer';

const StudentPhoto = () => {
  const [imageUri, setImageUri] = React.useState(null);

  React.useEffect(() => {
    const originalImageUri = 'https://www.instagram.com/p/C5OOM2NOBa7/?img_index=1';

    ImageResizer.createResizedImage(originalImageUri, 300, 400, 'PNG', 100)
      .then(response => {
        setImageUri(response.uri);
      })
      .catch(err => {
        console.log('Erro ao redimensionar imagem:', err);
      });
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {imageUri && <Image source={{ uri: imageUri }} style={{ width: 300, height: 400 }} />}
    </View>
  );
};

export default StudentPhoto;