import { View, Text, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useState } from 'react';

const products = [
  { id: '1', name: 'Produk A', price: 5000 },
  { id: '2', name: 'Produk B', price: 10000 },
  { id: '3', name: 'Produk C', price: 15000 },
  { id: '4', name: 'Produk D', price: 20000 },
];
export default function HomeScreen() {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = (product) => {
    setCart([...cart, product]);
    setTotalPrice(totalPrice + product.price);
  };

  const handleCheckout = () => {
    // Simulasi checkout
    alert(`Pembayaran berhasil! Total: Rp ${totalPrice}`);
    setCart([]); // Kosongkan keranjang
    setTotalPrice(0);
  };

  return (
    <View style={styles.container}>
    <Text style={styles.header}>Toko Kasir</Text>
    
    <Text style={styles.title}>Daftar Produk</Text>
    
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.productItem}>
          <Text style={styles.productName}>{item.name}</Text>
          <Text style={styles.productPrice}>Rp {item.price}</Text>
          <TouchableOpacity 
            style={styles.button} 
            onPress={() => addToCart(item)}>
            <Text style={styles.buttonText}>Tambah ke Keranjang</Text>
          </TouchableOpacity>
        </View>
      )}
    />

    <View style={styles.cart}>
      <Text style={styles.cartText}>Keranjang Belanja</Text>
      <FlatList
        data={cart}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text style={styles.cartItem}>{item.name} - Rp {item.price}</Text>
        )}
      />
      <Text style={styles.total}>Total: Rp {totalPrice}</Text>
      
      <Button title="Checkout" onPress={handleCheckout} />
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f4f4f4',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  productItem: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 16,
    color: '#888',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
  cart: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  cartText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cartItem: {
    fontSize: 16,
    color: '#333',
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
});
