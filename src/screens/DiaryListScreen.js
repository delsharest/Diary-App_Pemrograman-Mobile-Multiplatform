import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import DiaryCard from '../components/DiaryCard';

// Lima data buku harian statis sesuai tugas praktikum.
const diaryEntries = [
  {
    id: 1,
    title: 'Pagi Hari yang Tenang',
    date: '2025-10-06',
    preview:
      'Hari ini aku bangun lebih pagi dan berjalan kaki 20 menit. Udara terasa sejuk...',
    mood: 'Senang',
    // Gambar lokal: file wajib ada di assets/moods/happy.png.
    moodSource: require('../../assets/moods/happy.png'),
  },
  {
    id: 2,
    title: 'Produktif di Kampus',
    date: '2025-10-05',
    preview:
      'Menyelesaikan modul praktikum dan berdiskusi dengan tim. Banyak insight baru...',
    mood: 'Produktif',
    moodSource: { uri: 'https://picsum.photos/seed/focus/80' },
  },
  {
    id: 3,
    title: 'Senja di Taman',
    date: '2025-10-04',
    preview:
      'Menikmati senja sambil membaca buku favorit. Warna langit sangat indah...',
    mood: 'Tenang',
    moodSource: { uri: 'https://picsum.photos/seed/calm/80' },
  },
  {
    id: 4,
    title: 'Belajar Hal Baru',
    date: '2025-10-03',
    preview:
      'Hari ini mencoba beberapa hal baru dalam pemrograman mobile. Seru dan menantang!',
    mood: 'Semangat',
    moodSource: { uri: 'https://picsum.photos/seed/learn/80' },
  },
  {
    id: 5,
    title: 'Bersyukur Hari Ini',
    date: '2025-10-02',
    preview:
      'Menyempatkan waktu bersama keluarga dan menikmati hal-hal sederhana hari ini...',
    mood: 'Bersyukur',
    moodSource: { uri: 'https://picsum.photos/seed/grateful/80' },
  },
];

export default function DiaryListScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      <View style={styles.headerRow}>
        <Text style={styles.header}>Buku Harian</Text>
        <Image
          source={require('../../assets/avatar.png')}
          style={styles.avatar}
          accessibilityLabel="Avatar pengguna"
        />
      </View>

      {diaryEntries.map((entry) => (
        <DiaryCard
          key={entry.id}
          title={entry.title}
          date={entry.date}
          preview={entry.preview}
          mood={entry.mood}
          moodSource={entry.moodSource}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  content: {
    padding: 16,
    paddingBottom: 28,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 18,
  },
  header: {
    fontSize: 24,
    fontWeight: '700',
    color: '#0F172A',
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 2,
    borderColor: '#DBEAFE',
  },
});
