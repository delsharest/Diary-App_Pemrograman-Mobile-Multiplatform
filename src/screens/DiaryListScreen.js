
import React, { useMemo, useState } from 'react';

import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  useWindowDimensions,
} from 'react-native';

import DiaryCard from '../components/DiaryCard';
import DiaryDetailModal from '../components/DiaryDetailModal';

import {
  COLORS,
  SPACE,
  RADIUS,
  TYPO,
  BREAKPOINTS,
} from '../styles/tokens';

// DATA DIARY
// Lima entri lama dan dua entri baru.
const DATA = [
  {
    id: 1,
    title: 'Pagi Hari yang Tenang',
    date: '2025-10-06',
    preview:
      'Hari ini aku bangun lebih pagi dan berjalan kaki 20 menit. Udara terasa sejuk...',
    body:
      'Hari ini aku bangun lebih pagi dari biasanya. Aku menyempatkan berjalan kaki selama 20 menit sambil menikmati udara yang masih sejuk. Rasanya menyenangkan bisa memulai hari dengan lebih tenang dan penuh energi.',
    mood: 'Senang',
    moodSource: require('../../assets/moods/happy.png'),
    heroSource: require('../../assets/moods/happy.png'),
  },
  {
    id: 2,
    title: 'Produktif di Kampus',
    date: '2025-10-05',
    preview:
      'Menyelesaikan modul praktikum dan berdiskusi dengan tim. Banyak insight baru...',
    body:
      'Hari ini aku menyelesaikan modul praktikum dan berdiskusi dengan tim. Kami membahas langkah pengerjaan program, mencoba beberapa solusi, dan mendapat banyak wawasan baru. Hari ini terasa sangat produktif.',
    mood: 'Produktif',
    moodSource: {
      uri: 'https://picsum.photos/seed/focus/80',
    },
    heroSource: {
      uri: 'https://picsum.photos/seed/focushero/800/450',
    },
  },
  {
    id: 3,
    title: 'Senja di Taman',
    date: '2025-10-04',
    preview:
      'Menikmati senja sambil membaca buku favorit. Warna langit sangat indah...',
    body:
      'Sore ini aku duduk di taman dan membaca buku favorit. Langit perlahan berubah warna menjelang senja. Suasana yang tenang membuatku bisa beristirahat sejenak dari aktivitas sehari-hari.',
    mood: 'Tenang',
    moodSource: {
      uri: 'https://picsum.photos/seed/calm/80',
    },
    heroSource: {
      uri: 'https://picsum.photos/seed/calmhero/800/450',
    },
  },
  {
    id: 4,
    title: 'Belajar Hal Baru',
    date: '2025-10-03',
    preview:
      'Hari ini mencoba beberapa hal baru dalam pemrograman mobile. Seru dan menantang!',
    body:
      'Aku mencoba beberapa hal baru dalam pemrograman mobile. Ada bagian yang membuatku berpikir cukup lama, tetapi setelah mempelajarinya sedikit demi sedikit, aku jadi lebih memahami cara kerjanya. Belajar memang menantang, tetapi seru.',
    mood: 'Semangat',
    moodSource: {
      uri: 'https://picsum.photos/seed/learn/80',
    },
    heroSource: {
      uri: 'https://picsum.photos/seed/learnhero/800/450',
    },
  },
  {
    id: 5,
    title: 'Bersyukur Hari Ini',
    date: '2025-10-02',
    preview:
      'Menyempatkan waktu bersama keluarga dan menikmati hal-hal sederhana hari ini...',
    body:
      'Hari ini aku menyempatkan waktu bersama keluarga. Kami berbincang dan menikmati kegiatan sederhana di rumah. Momen seperti ini membuatku ingat bahwa hal-hal kecil juga patut disyukuri.',
    mood: 'Bersyukur',
    moodSource: {
      uri: 'https://picsum.photos/seed/grateful/80',
    },
    heroSource: {
      uri: 'https://picsum.photos/seed/gratefulhero/800/450',
    },
  },

  // DUA ENTRI BARU - PERTEMUAN 3
  {
    id: 6,
    title: 'Ide Kreatif Hari Ini',
    date: '2025-10-01',
    preview:
      'Mencatat beberapa ide aplikasi baru yang ingin aku coba suatu hari nanti...',
    body:
      'Aku mencatat beberapa ide aplikasi sederhana yang muncul saat belajar. Tidak semuanya bisa langsung dikerjakan, tetapi aku ingin menyimpannya sebagai bahan latihan. Siapa tahu salah satunya dapat menjadi proyek yang menarik.',
    mood: 'Penasaran',
    moodSource: {
      uri: 'https://picsum.photos/seed/creative/80',
    },
    heroSource: {
      uri: 'https://picsum.photos/seed/creativehero/800/450',
    },
  },
  {
    id: 7,
    title: 'Hari yang Ceria',
    date: '2025-09-30',
    preview:
      'Menghabiskan waktu beristirahat dan melakukan aktivitas yang aku sukai...',
    body:
      'Aku meluangkan waktu untuk beristirahat dan melakukan beberapa kegiatan yang aku sukai. Setelah beberapa hari cukup sibuk, kesempatan untuk menikmati waktu luang terasa menyenangkan dan membuatku lebih bersemangat.',
    mood: 'Bahagia',
    moodSource: {
      uri: 'https://picsum.photos/seed/weekend/80',
    },
    heroSource: {
      uri: 'https://picsum.photos/seed/weekendhero/800/450',
    },
  },
];

// KOMPONEN UTAMA
export default function DiaryListScreen() {
  const { width } = useWindowDimensions();

  // Menentukan jumlah kolom
  const twoCols = width >= BREAKPOINTS.tablet;

  // Menyimpan diary yang sedang dipilih
  const [selected, setSelected] = useState(null);

  // Mengganti key saat jumlah kolom berubah
  const keyForCols = useMemo(
    () => (twoCols ? 'grid2' : 'list1'),
    [twoCols]
  );

  // Spacer untuk melengkapi baris terakhir
  // ketika grid memiliki jumlah data ganjil
  const listData = useMemo(() => {
    if (twoCols && DATA.length % 2 !== 0) {
      return [
        ...DATA,
        { id: 'spacer', isSpacer: true },
      ];
    }

    return DATA;
  }, [twoCols]);

  // MENAMPILKAN KARTU DIARY
  const renderItem = ({ item }) => {
    if (item.isSpacer) {
      return (
        <View
          style={styles.itemWrap}
          accessible={false}
        />
      );
    }

    return (
      <View style={styles.itemWrap}>
        <DiaryCard
          title={item.title}
          date={item.date}
          preview={item.preview}
          mood={item.mood}
          moodSource={item.moodSource}
          variant={twoCols ? 'grid' : 'list'}
          onPress={() => setSelected(item)}
        />
      </View>
    );
  };

  // TAMPILAN HALAMAN
  return (
    <View style={styles.container}>

      {/* HEADER DAN AVATAR */}
      <View style={styles.headerRow}>
        <Text style={styles.header}>
          Buku Harian
        </Text>

        <Image
          source={require('../../assets/avatar.png')}
          style={styles.avatar}
          accessibilityLabel="Avatar pengguna"
        />
      </View>

      {/* DAFTAR DIARY RESPONSIF */}
      <FlatList
        key={keyForCols}
        data={listData}
        numColumns={twoCols ? 2 : 1}
        keyExtractor={(item) => String(item.id)}
        renderItem={renderItem}
        columnWrapperStyle={
          twoCols ? styles.columns : undefined
        }
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={
          <Text style={styles.empty}>
            Belum ada entri diary.
          </Text>
        }
      />

      {/* MODAL DETAIL DIARY */}
      <DiaryDetailModal
        visible={selected !== null}
        entry={selected}
        onClose={() => setSelected(null)}
      />

    </View>
  );
}

// STYLING
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.surface,
  },

  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: SPACE.l,
    paddingTop: SPACE.l,
    paddingBottom: SPACE.m,
  },

  header: {
    fontSize: TYPO.h1,
    fontWeight: '700',
    color: COLORS.text,
  },

  avatar: {
    width: 48,
    height: 48,
    borderRadius: RADIUS.headerAvatar,
    borderWidth: 2,
    borderColor: COLORS.avatarBorder,
  },

  listContent: {
    paddingHorizontal: SPACE.l,
    paddingTop: SPACE.s,
    paddingBottom: SPACE.xl,
  },

  columns: {
    gap: SPACE.m,
  },

  itemWrap: {
    flex: 1,
  },

  empty: {
    textAlign: 'center',
    color: COLORS.muted,
    marginTop: SPACE.xl,
  },
});
