import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

// Perbedaan warna border kiri untuk setiap mood.
const moodColors = {
  Senang: '#16A34A',
  Produktif: '#2563EB',
  Tenang: '#8B5CF6',
  Semangat: '#EA580C',
  Bersyukur: '#DB2777',
};

export default function DiaryCard({ title, date, preview, mood, moodSource }) {
  const borderColor = moodColors[mood] || '#64748B';

  return (
    <View style={[styles.card, { borderLeftColor: borderColor }]}>
      <Image
        source={moodSource}
        style={styles.moodImage}
        accessibilityLabel={`Gambar mood ${mood}`}
      />
      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
        <Text style={styles.date}>{date} · {mood}</Text>
        <Text
          style={styles.preview}
          numberOfLines={3}
          ellipsizeMode="tail"
        >
          {preview}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    padding: 12,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderLeftWidth: 5,
    borderColor: '#E2E8F0',
    borderRadius: 12,
    marginBottom: 12,
  },
  moodImage: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#F1F5F9',
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0F172A',
  },
  date: {
    fontSize: 12,
    color: '#64748B',
    marginBottom: 6,
  },
  preview: {
    fontSize: 14,
    color: '#334155',
    lineHeight: 20,
  },
});
