
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
} from 'react-native';

import {
  COLORS,
  MOOD_COLORS,
  SPACE,
  RADIUS,
  TYPO,
} from '../styles/tokens';

// Gambar cadangan jika gambar internet gagal dimuat
const FALLBACK_MOOD = require('../../assets/moods/happy.png');

export default function DiaryCard({
  title,
  date,
  preview,
  mood,
  moodSource,
  moodUri,
  onPress,
  variant = 'list',
}) {
  const [imageFailed, setImageFailed] = useState(false);

  const imageSource =
    moodSource ||
    (moodUri ? { uri: moodUri } : FALLBACK_MOOD);

  const borderColor = MOOD_COLORS[mood] || COLORS.muted;
  const isGrid = variant === 'grid';

  useEffect(() => {
    setImageFailed(false);
  }, [moodSource, moodUri]);

  return (
    <Pressable
      onPress={onPress}
      android_ripple={{ color: COLORS.ripple }}
      style={({ pressed }) => [
        styles.pressable,
        pressed && styles.pressed,
      ]}
      accessible
      accessibilityRole="button"
      accessibilityLabel={`Buka entri ${title}, tanggal ${date}, mood ${mood}`}
      accessibilityHint="Menampilkan detail catatan harian"
    >
      <View
        style={[
          styles.card,
          isGrid && styles.cardGrid,
          { borderLeftColor: borderColor },
        ]}
      >
        <Image
          source={imageFailed ? FALLBACK_MOOD : imageSource}
          style={styles.moodImage}
          onError={() => setImageFailed(true)}
          accessibilityLabel={`Gambar mood ${mood}`}
        />

        <View style={styles.content}>
          <Text
            style={styles.title}
            numberOfLines={isGrid ? 2 : 1}
          >
            {title}
          </Text>

          <Text style={styles.date}>
            {date} · {mood}
          </Text>

          <Text
            style={styles.preview}
            numberOfLines={3}
            ellipsizeMode="tail"
          >
            {preview}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressable: {
    flex: 1,
    borderRadius: RADIUS.card,
    overflow: 'hidden',
    marginBottom: SPACE.m,
  },

  pressed: {
    opacity: 0.85,
  },

  card: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACE.m,
    padding: SPACE.m,
    backgroundColor: COLORS.card,
    borderWidth: 1,
    borderLeftWidth: 5,
    borderColor: COLORS.border,
    borderRadius: RADIUS.card,
  },

  cardGrid: {
    flexDirection: 'column',
    alignItems: 'stretch',
    minHeight: 215,
  },

  moodImage: {
    width: 64,
    height: 64,
    borderRadius: RADIUS.avatar,
    backgroundColor: COLORS.moodPlaceholder,
  },

  content: {
    flex: 1,
  },

  title: {
    fontSize: TYPO.title,
    fontWeight: '700',
    color: COLORS.text,
  },

  date: {
    fontSize: TYPO.caption,
    color: COLORS.muted,
    marginBottom: SPACE.xs,
  },

  preview: {
    fontSize: TYPO.body,
    color: COLORS.body,
    lineHeight: 20,
  },
});
