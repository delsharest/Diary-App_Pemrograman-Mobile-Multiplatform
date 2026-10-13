
import React from 'react';
import {
  Modal,
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  ScrollView,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import {
  COLORS,
  MOOD_COLORS,
  SPACE,
  RADIUS,
  TYPO,
} from '../styles/tokens';

const FALLBACK_IMAGE = require('../../assets/moods/happy.png');

export default function DiaryDetailModal({
  visible,
  onClose,
  entry,
}) {
  if (!entry) return null;

  const {
    title,
    date,
    mood,
    preview,
    body,
    heroSource,
    heroUri,
    moodSource,
    moodUri,
  } = entry;

  const imageSource =
    heroSource ||
    (heroUri ? { uri: heroUri } : null) ||
    moodSource ||
    (moodUri ? { uri: moodUri } : null) ||
    FALLBACK_IMAGE;

  const moodColor = MOOD_COLORS[mood] || COLORS.accent;

  return (
    <Modal
      visible={visible}
      animationType="slide"
      onRequestClose={onClose}
    >
      <SafeAreaView style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
        >
          <Image
            source={imageSource}
            style={styles.hero}
            resizeMode="cover"
            accessibilityLabel={`Gambar diary ${title}`}
          />

          <View style={styles.content}>
            <Text style={styles.title}>
              {title}
            </Text>

            <Text style={styles.date}>
              {date}
            </Text>

            <View
              style={[
                styles.moodBadge,
                { borderColor: moodColor },
              ]}
            >
              <Text
                style={[
                  styles.moodText,
                  { color: moodColor },
                ]}
              >
                {mood || 'Diary'}
              </Text>
            </View>

            <Text style={styles.body}>
              {body || preview}
            </Text>

            <Pressable
              onPress={onClose}
              style={({ pressed }) => [
                styles.button,
                pressed && styles.buttonPressed,
              ]}
              accessibilityRole="button"
              accessibilityLabel="Tutup detail diary"
            >
              <Text style={styles.buttonText}>
                Tutup
              </Text>
            </Pressable>
          </View>
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.surface,
  },

  scrollContent: {
    flexGrow: 1,
  },

  hero: {
    width: '100%',
    aspectRatio: 16 / 9,
    backgroundColor: COLORS.moodPlaceholder,
    borderBottomLeftRadius: RADIUS.card,
    borderBottomRightRadius: RADIUS.card,
  },

  content: {
    padding: SPACE.l,
    gap: SPACE.s,
  },

  title: {
    fontSize: TYPO.detailTitle,
    fontWeight: '700',
    color: COLORS.text,
  },

  date: {
    fontSize: TYPO.caption,
    color: COLORS.muted,
  },

  moodBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: SPACE.m,
    paddingVertical: SPACE.s,
    borderRadius: RADIUS.card,
    borderWidth: 1,
    marginTop: SPACE.s,
  },

  moodText: {
    fontSize: TYPO.caption,
    fontWeight: '700',
  },

  body: {
    fontSize: TYPO.body,
    color: COLORS.body,
    lineHeight: 22,
    marginTop: SPACE.m,
  },

  button: {
    marginTop: SPACE.xl,
    padding: SPACE.m,
    minHeight: 48,
    borderRadius: RADIUS.card,
    backgroundColor: COLORS.accent,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonPressed: {
    opacity: 0.8,
  },

  buttonText: {
    color: COLORS.onAccent,
    fontWeight: '700',
    fontSize: TYPO.title,
  },
});
