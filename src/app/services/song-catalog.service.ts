import { Injectable } from '@angular/core';
import { Song, LyricLine } from '../models/song';

export interface AlbumEraInfo {
  name: string;
  year: string;
  quote: string;
  accolades: string;
  funFact: string;
  color: string;
}

@Injectable({
  providedIn: 'root'
})
export class SongCatalogService {

  private albumEras: Record<string, AlbumEraInfo> = {
    '1989': {
      name: '1989',
      year: '2014',
      quote: '“It’s a new soundtrack, I could dance to this beat forevermore.”',
      accolades: '🏆 3 Grammy Awards including Album of the Year & Best Pop Vocal Album',
      funFact: 'Taylor’s first official full-length pop album, named after her birth year.',
      color: '#0a6b6b'
    },
    'Fearless': {
      name: 'Fearless',
      year: '2008',
      quote: '“In a world of boys, he’s a gentleman.”',
      accolades: '🏆 4 Grammy Awards including Album of the Year (youngest winner at the time)',
      funFact: 'The most awarded country album in the history of music.',
      color: '#637e2d'
    },
    'Red': {
      name: 'Red',
      year: '2012',
      quote: '“Loving him was red.”',
      accolades: '🏆 4x Platinum, Billboard 200 #1 for 7 consecutive weeks',
      funFact: 'Explored a mix of country, pop, rock, and dubstep elements.',
      color: '#f23f3f'
    },
    'Speak Now': {
      name: 'Speak Now',
      year: '2010',
      quote: '“Long live the walls we crashed through, I had the time of my life with you.”',
      accolades: '🏆 2 Grammy Awards, Guinness World Record for fastest-selling digital album by a female',
      funFact: 'Entirely written solely by Taylor Swift with no co-writers.',
      color: '#C71585'
    },
    'Lover': {
      name: 'Lover',
      year: '2019',
      quote: '“Can I go where you go? Can we always be this close forever and ever?”',
      accolades: '🏆 Top-selling studio album globally in 2019, 3 Grammy nominations',
      funFact: 'Celebrates love in all its spectrums with dreamy pastel synth-pop.',
      color: '#4682B4'
    },
    'Reputation': {
      name: 'Reputation',
      year: '2017',
      quote: '“There will be no explanation, there will just be reputation.”',
      accolades: '🏆 Highest-grossing North American tour in history at the time',
      funFact: 'Released after a year of media silence, embracing darker, electronic beats.',
      color: '#2e4444'
    },
    'Folklore': {
      name: 'Folklore',
      year: '2020',
      quote: '“And when I felt like I was an old cardigan under someone’s bed, you put me on and said I was your favorite.”',
      accolades: '🏆 Grammy Award for Album of the Year, critically acclaimed masterpiece',
      funFact: 'Written and recorded in isolation during the pandemic, exploring indie-folk narratives.',
      color: '#2d4a3e'
    },
    'Midnights': {
      name: 'Midnights',
      year: '2022',
      quote: '“Meet me at midnight... It’s me, hi, I’m the problem, it’s me.”',
      accolades: '🏆 Grammy Award for Album of the Year, broke all-time streaming records',
      funFact: 'A concept album about 13 sleepless nights scattered throughout Taylor’s life.',
      color: '#1d264f'
    }
  };

  private allSongs: Song[] = [
    // 1989
    {
      name: 'Blank Space',
      url: 'assets/sounds/1989/blankspace.mp3',
      album: '1989',
      image: 'assets/images/1989/blankspace.jfif',
      lyrics: '“‘Cause darling, I’m a nightmare dressed like a daydream.”',
      timedLyrics: [
        { time: 0, text: 'Nice to meet you, where you been?' },
        { time: 4, text: 'I could show you incredible things' },
        { time: 8, text: 'Magic, madness, heaven, sin' },
        { time: 13, text: 'Saw you there and I thought: Oh my God, look at that face' },
        { time: 19, text: 'Grab your passport and my hand' },
        { time: 24, text: 'I can make the bad guys good for a weekend' },
        { time: 29, text: 'So it’s gonna be forever, or it’s gonna go down in flames' },
        { time: 37, text: '‘Cause you know I love the players, and you love the game' },
        { time: 44, text: '‘Cause darling, I’m a nightmare dressed like a daydream' },
        { time: 52, text: 'Got a long list of ex-lovers, they’ll tell you I’m insane' },
        { time: 60, text: 'But I got a blank space, baby, and I’ll write your name!' }
      ]
    },
    {
      name: 'Shake It Off',
      url: 'assets/sounds/1989/shakeitoff.mp3',
      album: '1989',
      image: 'assets/images/1989/shakeitoff.jfif',
      lyrics: '“‘Cause the players gonna play, play, play, play, play.”',
      timedLyrics: [
        { time: 0, text: 'I stay out too late, got nothing in my brain' },
        { time: 6, text: 'That’s what people say, that’s what people say' },
        { time: 12, text: 'I keep cruising, can’t stop, won’t stop moving' },
        { time: 19, text: '‘Cause the players gonna play, play, play, play, play' },
        { time: 26, text: 'And the haters gonna hate, hate, hate, hate, hate' },
        { time: 34, text: 'Baby, I’m just gonna shake, shake, shake, shake, shake' },
        { time: 42, text: 'Shake it off, I shake it off!' }
      ]
    },
    {
      name: 'Bad Blood',
      url: 'assets/sounds/1989/badblood.mp3',
      album: '1989',
      image: 'assets/images/1989/badblood.jfif',
      lyrics: '“‘Cause baby, now we’ve got bad blood, you know it used to be mad love.”',
      timedLyrics: [
        { time: 0, text: '‘Cause baby, now we’ve got bad blood' },
        { time: 6, text: 'You know it used to be mad love' },
        { time: 11, text: 'So take a look what you’ve done' },
        { time: 17, text: '‘Cause baby, now we’ve got bad blood, hey!' }
      ]
    },
    {
      name: 'Style',
      url: 'assets/sounds/1989/style.mp3',
      album: '1989',
      image: 'assets/images/1989/style.jfif',
      lyrics: '“You got that James Dean daydream look in your eye.”',
      timedLyrics: [
        { time: 0, text: 'Midnight, you come and pick me up, no headlights' },
        { time: 7, text: 'Long drive, could end in burning flames or paradise' },
        { time: 15, text: 'You got that James Dean daydream look in your eye' },
        { time: 24, text: 'And I got that red lip classic thing that you like' },
        { time: 32, text: '‘Cause we never go out of style, we never go out of style!' }
      ]
    },
    {
      name: 'Out of the Woods',
      url: 'assets/sounds/1989/outofwoods.mp3',
      album: '1989',
      image: 'assets/images/1989/outofwoods.jfif',
      lyrics: '“Are we out of the woods yet? Are we in the clear yet?”',
      timedLyrics: [
        { time: 0, text: 'Looking at it now, it all seems so simple' },
        { time: 7, text: 'We were lying on your couch, I remember' },
        { time: 15, text: 'Are we out of the woods yet? Are we out of the woods yet?' },
        { time: 25, text: 'Are we in the clear yet? In the clear yet? Good.' }
      ]
    },
    {
      name: 'Wildest Dreams',
      url: 'assets/sounds/1989/wildestdreams.mp3',
      album: '1989',
      image: 'assets/images/1989/wildestdreams.jfif',
      lyrics: '“Say you’ll remember me standing in a nice dress, staring at the sunset.”',
      timedLyrics: [
        { time: 0, text: 'He said: Let’s get out of this town, drive out of the city, away from the crowds' },
        { time: 8, text: 'I thought: Heaven can’t help me now, nothing lasts forever' },
        { time: 16, text: 'Say you’ll remember me standing in a nice dress' },
        { time: 23, text: 'Staring at the sunset, babe, red lips and rosy cheeks' },
        { time: 30, text: 'Say you’ll see me again, even if it’s just in your wildest dreams!' }
      ]
    },
    {
      name: 'Welcome to New York',
      url: 'assets/sounds/1989/welcometonewyork.mp3',
      album: '1989',
      image: 'assets/images/1989/welcometonewyork.jfif',
      lyrics: '“Welcome to New York, it’s been waiting for you!”',
      timedLyrics: [
        { time: 0, text: 'Walking through a crowd, the village is aglow' },
        { time: 6, text: 'Kaleidoscope of loud heartbeats under coats' },
        { time: 12, text: 'Welcome to New York, it’s been waiting for you!' },
        { time: 19, text: 'Welcome to New York, welcome to New York!' }
      ]
    },
    {
      name: 'All You Had to Do Was Stay',
      url: 'assets/sounds/1989/allyouhadtodowasstay.mp3',
      album: '1989',
      image: 'assets/images/1989/allyouhadtodowasstay.jfif',
      lyrics: '“All you had to do was stay!”',
      timedLyrics: [
        { time: 0, text: 'People like you always want back the love they gave away' },
        { time: 7, text: 'And people like me wanna believe you when you say you’ve changed' },
        { time: 15, text: 'All you had to do was stay!' }
      ]
    },
    {
      name: 'Clean',
      url: 'assets/sounds/1989/clean.mp3',
      album: '1989',
      image: 'assets/images/1989/clean.jfif',
      lyrics: '“Rain came pouring down, when I was drowning, that’s when I could finally breathe.”',
      timedLyrics: [
        { time: 0, text: 'The drought was the very worst when the flowers that we’d grown together died of thirst' },
        { time: 8, text: 'Rain came pouring down' },
        { time: 14, text: 'When I was drowning, that’s when I could finally breathe' },
        { time: 22, text: 'And by morning, gone was any trace of you, I think I am finally clean.' }
      ]
    },

    // Fearless
    {
      name: 'Love Story',
      url: 'assets/sounds/fearless/lovestory.mp3',
      album: 'Fearless',
      image: 'assets/images/fearless/lovestory.jfif',
      lyrics: '“It’s a love story, baby, just say: Yes.”',
      timedLyrics: [
        { time: 0, text: 'We were both young when I first saw you' },
        { time: 6, text: 'I close my eyes and the flashback starts' },
        { time: 12, text: 'I’m standing there on a balcony in summer air' },
        { time: 19, text: 'Romeo, take me somewhere we can be alone' },
        { time: 26, text: 'I’ll be waiting, all there’s left to do is run' },
        { time: 33, text: 'It’s a love story, baby, just say: Yes!' }
      ]
    },
    {
      name: 'You Belong with Me',
      url: 'assets/sounds/fearless/ybwm.mp3',
      album: 'Fearless',
      image: 'assets/images/fearless/ybwm.jfif',
      lyrics: '“Been here all along, so why can’t you see? You belong with me.”',
      timedLyrics: [
        { time: 0, text: 'You’re on the phone with your girlfriend, she’s upset' },
        { time: 6, text: 'She doesn’t get your humor like I do' },
        { time: 12, text: 'She wears high heels, I wear sneakers' },
        { time: 18, text: 'She’s cheer captain and I’m on the bleachers' },
        { time: 25, text: 'If you could see that I’m the one who understands you' },
        { time: 32, text: 'Been here all along, so why can’t you see? You belong with me!' }
      ]
    },
    {
      name: 'White Horse',
      url: 'assets/sounds/fearless/whitehorse.mp3',
      album: 'Fearless',
      image: 'assets/images/fearless/whitehorse.jfif',
      lyrics: '“I’m not a princess, this ain’t a fairytale.”',
      timedLyrics: [
        { time: 0, text: 'Say you’re sorry, that face of an angel comes out' },
        { time: 8, text: '‘Cause I’m not a princess, this ain’t a fairytale' },
        { time: 16, text: 'I’m not the one you’ll sweep off her feet, lead her up the stairwell' }
      ]
    },
    {
      name: 'Fifteen',
      url: 'assets/sounds/fearless/fifteen.mp3',
      album: 'Fearless',
      image: 'assets/images/fearless/fifteen.jfif',
      lyrics: '“Take a deep breath as you walk through the doors.”',
      timedLyrics: [
        { time: 0, text: 'You take a deep breath and you walk through the doors' },
        { time: 8, text: '‘Cause when you’re fifteen and somebody tells you they love you' },
        { time: 17, text: 'You’re gonna believe them' }
      ]
    },
    {
      name: 'Fearless',
      url: 'assets/sounds/fearless/fearless.mp3',
      album: 'Fearless',
      image: 'assets/images/fearless/fearless.jfif',
      lyrics: '“‘Cause I don’t know how it gets better than this, you take my hand and drag me head first, fearless!”',
      timedLyrics: [
        { time: 0, text: 'There’s something ‘bout the way the street looks when it’s just rained' },
        { time: 7, text: 'There’s a glow off the pavement, you walk me to the car' },
        { time: 15, text: '‘Cause I don’t know how it gets better than this' },
        { time: 22, text: 'You take my hand and drag me head first, fearless!' }
      ]
    },
    {
      name: 'Forever & Always',
      url: 'assets/sounds/fearless/foreverandalways.mp3',
      album: 'Fearless',
      image: 'assets/images/fearless/foreverandalways.jfif',
      lyrics: '“And I stare at the phone, he still hasn’t called, and then you feel so low you can’t feel nothing at all.”',
      timedLyrics: [
        { time: 0, text: 'Once upon a time, I believe it was a Tuesday when I caught your eye' },
        { time: 7, text: 'And I stare at the phone, he still hasn’t called' },
        { time: 14, text: '‘Cause it was you, babe, you said forever and always!' }
      ]
    },
    {
      name: 'Hey Stephen',
      url: 'assets/sounds/fearless/heystephen.mp3',
      album: 'Fearless',
      image: 'assets/images/fearless/heystephen.jfif',
      lyrics: '“Hey Stephen, I know looks can be deceiving, but I know I saw a light in you.”',
      timedLyrics: [
        { time: 0, text: 'Hey Stephen, I know looks can be deceiving' },
        { time: 6, text: 'But I know I saw a light in you' },
        { time: 12, text: '‘Cause I can’t help it if you look like an angel' },
        { time: 19, text: 'Can’t help it if I wanna kiss you in the rain so' }
      ]
    },
    {
      name: 'The Way I Loved You',
      url: 'assets/sounds/fearless/thewayilovedyou.mp3',
      album: 'Fearless',
      image: 'assets/images/fearless/thewayilovedyou.jfif',
      lyrics: '“Breakin’ down and coming undone, it’s a roller coaster kinda rush and I never knew I could feel that much.”',
      timedLyrics: [
        { time: 0, text: 'He is sensible and so incredible, and all my single friends are jealous' },
        { time: 8, text: 'But I miss screaming and fighting and kissing in the rain' },
        { time: 16, text: 'And it’s 2 AM and I’m cursing your name!' }
      ]
    },

    // Red
    {
      name: '22',
      url: 'assets/sounds/red/22.mp3',
      album: 'Red',
      image: 'assets/images/red/22.jfif',
      lyrics: '“I don’t know about you, but I’m feeling 22!”',
      timedLyrics: [
        { time: 0, text: 'It feels like a perfect night to dress up like hipsters' },
        { time: 7, text: 'Tonight’s the night when we forget about the deadlines' },
        { time: 14, text: 'I don’t know about you, but I’m feeling 22!' },
        { time: 22, text: 'Everything will be alright if you keep me next to you!' }
      ]
    },
    {
      name: 'I Knew You Were Trouble',
      url: 'assets/sounds/red/ikywit.mp3',
      album: 'Red',
      image: 'assets/images/red/ikywit.jfif',
      lyrics: '“‘Cause I knew you were trouble when you walked in!”',
      timedLyrics: [
        { time: 0, text: 'Once upon a time, a few mistakes ago' },
        { time: 7, text: '‘Cause I knew you were trouble when you walked in!' },
        { time: 15, text: 'So shame on me now, flew me to places I’d never been!' }
      ]
    },
    {
      name: 'We Are Never Ever Getting Back Together',
      url: 'assets/sounds/red/wanegbt.mp3',
      album: 'Red',
      image: 'assets/images/red/wanegbt.jfif',
      lyrics: '“We are never ever, ever getting back together! Like, ever.”',
      timedLyrics: [
        { time: 0, text: 'I remember when we broke up, the first time' },
        { time: 7, text: 'We are never ever, ever getting back together!' },
        { time: 15, text: 'We are never ever, ever getting back together!' }
      ]
    },
    {
      name: 'All Too Well',
      url: 'assets/sounds/red/alltoowell.mp3',
      album: 'Red',
      image: 'assets/images/red/alltoowell.jfif',
      lyrics: '“‘Cause there we are again on that little town street, you almost ran the red ‘cause you were lookin’ over at me.”',
      timedLyrics: [
        { time: 0, text: 'I walked through the door with you, the air was cold' },
        { time: 6, text: 'And I left my scarf there at your sister’s house' },
        { time: 13, text: 'And you’ve still got it in your drawer even now' },
        { time: 20, text: '‘Cause there we are again on that little town street' },
        { time: 27, text: 'And I know it’s long gone and that magic’s not here no more' },
        { time: 34, text: 'And I might be okay, but I’m not fine at all' },
        { time: 41, text: '‘Cause there we are again in the middle of the night' },
        { time: 48, text: 'And I remember it all too well.' }
      ]
    },
    {
      name: 'Red',
      url: 'assets/sounds/red/redsong.mp3',
      album: 'Red',
      image: 'assets/images/red/redsong.jfif',
      lyrics: '“Loving him was red, burning red.”',
      timedLyrics: [
        { time: 0, text: 'Loving him is like driving a new Maserati down a dead-end street' },
        { time: 8, text: 'Faster than the wind, passionate as sin, ended so suddenly' },
        { time: 16, text: 'Touching him was like realizing all you ever wanted was right there in front of you' },
        { time: 24, text: 'Loving him was red, burning red!' }
      ]
    },
    {
      name: 'Begin Again',
      url: 'assets/sounds/red/beginagain.mp3',
      album: 'Red',
      image: 'assets/images/red/beginagain.jfif',
      lyrics: '“On a Wednesday in a café, I watched it begin again.”',
      timedLyrics: [
        { time: 0, text: 'Took a deep breath in the mirror, he didn’t like it when I wore high heels' },
        { time: 8, text: 'You throw your head back laughing like a little kid' },
        { time: 16, text: 'And for the first time in a long time, on a Wednesday in a café' },
        { time: 24, text: 'I watched it begin again.' }
      ]
    },
    {
      name: 'State of Grace',
      url: 'assets/sounds/red/stateofgrace.mp3',
      album: 'Red',
      image: 'assets/images/red/stateofgrace.jfif',
      lyrics: '“Love is a ruthless game unless you play it good and right.”',
      timedLyrics: [
        { time: 0, text: 'I’m walking fast through the traffic lights, busy streets and busy lives' },
        { time: 8, text: 'And all we know is touch and go' },
        { time: 15, text: 'This is a state of grace, this is the worthwhile fight' },
        { time: 23, text: 'Love is a ruthless game unless you play it good and right!' }
      ]
    },

    // Speak Now
    {
      name: 'Back to December',
      url: 'assets/sounds/speaknow/btd.mp3',
      album: 'Speak Now',
      image: 'assets/images/speaknow/btd.jfif',
      lyrics: '“I’d go back to December, turn around and make it all right.”',
      timedLyrics: [
        { time: 0, text: 'I’m so glad you made time to see me' },
        { time: 7, text: 'This is me swallowing my pride, standing in front of you saying:' },
        { time: 15, text: 'I’m sorry for that night, and I’d go back to December all the time' }
      ]
    },
    {
      name: 'Enchanted',
      url: 'assets/sounds/speaknow/enchanted.mp3',
      album: 'Speak Now',
      image: 'assets/images/speaknow/enchanted.jpg',
      lyrics: '“This night is sparkling, don’t you let it go.”',
      timedLyrics: [
        { time: 0, text: 'There I was again tonight, forcing laughter, faking smiles' },
        { time: 8, text: 'This night is sparkling, don’t you let it go' },
        { time: 16, text: 'I’m wonderstruck, blushing all the way home' },
        { time: 24, text: 'I’ll spend forever wondering if you knew: I was enchanted to meet you!' }
      ]
    },
    {
      name: 'Last Kiss',
      url: 'assets/sounds/speaknow/lastkiss.mp3',
      album: 'Speak Now',
      image: 'assets/images/speaknow/lastkiss.jfif',
      lyrics: '“So I’ll watch your life in pictures like I used to watch you sleep.”',
      timedLyrics: [
        { time: 0, text: 'I still remember the look on your face' },
        { time: 8, text: 'So I’ll watch your life in pictures like I used to watch you sleep' }
      ]
    },
    {
      name: 'Haunted',
      url: 'assets/sounds/speaknow/haunted.mp3',
      album: 'Speak Now',
      image: 'assets/images/speaknow/haunted.jfif',
      lyrics: '“Can’t breathe whenever you’re gone, can’t turn back now, I’m haunted.”',
      timedLyrics: [
        { time: 0, text: 'You and I walk a fragile line' },
        { time: 8, text: 'Can’t breathe whenever you’re gone, can’t turn back now, I’m haunted' }
      ]
    },
    {
      name: 'Mean',
      url: 'assets/sounds/speaknow/mean.mp3',
      album: 'Speak Now',
      image: 'assets/images/speaknow/mean.jfif',
      lyrics: '“Someday I’ll be living in a big old city, and all you’re ever gonna be is mean.”',
      timedLyrics: [
        { time: 0, text: 'You, with your words like knives and swords and weapons' },
        { time: 8, text: 'Someday I’ll be living in a big old city, and all you’re ever gonna be is mean!' }
      ]
    },
    {
      name: 'Long Live',
      url: 'assets/sounds/speaknow/ll.mp3',
      album: 'Speak Now',
      image: 'assets/images/speaknow/ll.jfif',
      lyrics: '“Long live the walls we crashed through, all the kingdom lights shined just for me and you.”',
      timedLyrics: [
        { time: 0, text: 'I said: Remember this feeling, I passed the pictures around' },
        { time: 8, text: 'Long live the walls we crashed through, all the kingdom lights shined just for me and you!' }
      ]
    },
    {
      name: 'Mine',
      url: 'assets/sounds/speaknow/mine.mp3',
      album: 'Speak Now',
      image: 'assets/images/speaknow/mine.jfif',
      lyrics: '“You are the best thing that’s ever been mine.”',
      timedLyrics: [
        { time: 0, text: 'You were in college working on the night train' },
        { time: 8, text: 'You made a rebel of a careless man’s careful daughter' },
        { time: 16, text: 'You are the best thing that’s ever been mine!' }
      ]
    },
    {
      name: 'Sparks Fly',
      url: 'assets/sounds/speaknow/sparksfly.mp3',
      album: 'Speak Now',
      image: 'assets/images/speaknow/sparksfly.jfif',
      lyrics: '“Drop everything now, meet me in the pouring rain.”',
      timedLyrics: [
        { time: 0, text: 'Drop everything now, meet me in the pouring rain' },
        { time: 8, text: 'Kiss me on the sidewalk, take away the pain, ‘cause I see sparks fly whenever you smile!' }
      ]
    },
    {
      name: 'Dear John',
      url: 'assets/sounds/speaknow/dearjohn.mp3',
      album: 'Speak Now',
      image: 'assets/images/speaknow/dearjohn.jfif',
      lyrics: '“Don’t you think nineteen’s too young to be played by your dark twisted games?”',
      timedLyrics: [
        { time: 0, text: 'Long were the nights when my days once revolved around you' },
        { time: 8, text: 'Counting my footsteps, praying the floor wouldn’t fall through' },
        { time: 16, text: 'Dear John, I see it all now, it was wrong' },
        { time: 24, text: 'Don’t you think nineteen’s too young to be played by your dark twisted games?' }
      ]
    },
    {
      name: 'Better Than Revenge',
      url: 'assets/sounds/speaknow/betterthanrevenge.mp3',
      album: 'Speak Now',
      image: 'assets/images/speaknow/betterthanrevenge.jfif',
      lyrics: '“There is nothing I do better than revenge.”',
      timedLyrics: [
        { time: 0, text: 'Now go stand in the corner and think about what you did' },
        { time: 6, text: 'She took him faster than you could say: Sabotage' },
        { time: 13, text: 'There is nothing I do better than revenge!' }
      ]
    },
    {
      name: 'The Story of Us',
      url: 'assets/sounds/speaknow/thestoryofus.mp3',
      album: 'Speak Now',
      image: 'assets/images/speaknow/thestoryofus.jfif',
      lyrics: '“Now I’m standing alone in a crowded room and we’re not speaking.”',
      timedLyrics: [
        { time: 0, text: 'I used to think one day we’d tell the story of us' },
        { time: 7, text: 'How we met and the sparks flew, except we just never fell in love' },
        { time: 15, text: 'Now I’m standing alone in a crowded room and we’re not speaking!' }
      ]
    },

    // Lover
    {
      name: 'Lover',
      url: 'assets/sounds/lover/lover.mp3',
      album: 'Lover',
      image: 'assets/images/lover/lover.jfif',
      lyrics: '“Can I go where you go? Can we always be this close forever and ever?”',
      timedLyrics: [
        { time: 0, text: 'We could leave the Christmas lights up ‘til January' },
        { time: 8, text: 'Can I go where you go? Can we always be this close forever and ever?' }
      ]
    },
    {
      name: 'Daylight',
      url: 'assets/sounds/lover/daylight.mp3',
      album: 'Lover',
      image: 'assets/images/lover/daylight.jfif',
      lyrics: '“I once believed love would be burning red, but it’s golden, like daylight.”',
      timedLyrics: [
        { time: 0, text: 'I once believed love would be burning red' },
        { time: 8, text: 'But it’s golden, like daylight!' }
      ]
    },
    {
      name: 'Me!',
      url: 'assets/sounds/lover/met.mp3',
      album: 'Lover',
      image: 'assets/images/lover/me.jfif',
      lyrics: '“I’m the only one of me, baby, that’s the fun of me!”',
      timedLyrics: [
        { time: 0, text: 'I promise that you’ll never find another like me!' },
        { time: 8, text: 'I’m the only one of me, baby, that’s the fun of me!' }
      ]
    },
    {
      name: 'You Need to Calm Down',
      url: 'assets/sounds/lover/calmdown.mp3',
      album: 'Lover',
      image: 'assets/images/lover/calmdown.jfif',
      lyrics: '“You need to calm down, you’re being too loud.”',
      timedLyrics: [
        { time: 0, text: 'You need to calm down, you’re being too loud' },
        { time: 8, text: 'And I’m just like: Can you not step on my gown?' }
      ]
    },
    {
      name: 'Cornellia Street',
      url: 'assets/sounds/lover/cornelliastreet.mp3',
      album: 'Lover',
      image: 'assets/images/lover/cornelliastreet.jfif',
      lyrics: '“I’d never walk Cornelia Street again.”',
      timedLyrics: [
        { time: 0, text: 'And baby, I get mystified by how this city screams your name' },
        { time: 8, text: 'I’d never walk Cornelia Street again!' }
      ]
    },
    {
      name: 'Cruel Summer',
      url: 'assets/sounds/lover/cruelsummer.mp3',
      album: 'Lover',
      image: 'assets/images/lover/cruelsummer.jfif',
      lyrics: '“It’s cool, that’s what I tell ‘em, no rules in breakable heaven.”',
      timedLyrics: [
        { time: 0, text: 'Fever dream high in the quiet of the night' },
        { time: 8, text: 'It’s a cruel summer with you!' },
        { time: 16, text: 'Said I’m fine, but it wasn’t true: I don’t wanna keep secrets just to keep you!' }
      ]
    },
    {
      name: 'London Boy',
      url: 'assets/sounds/lover/londonboy.mp3',
      album: 'Lover',
      image: 'assets/images/lover/cornelliastreet.jfif',
      lyrics: '“You know I love a London boy, boy, I fancy you.”',
      timedLyrics: [
        { time: 0, text: 'You know I love a London boy, boy, I fancy you!' },
        { time: 8, text: 'So I guess all the rumors are true, you know I love a London boy!' }
      ]
    },
    {
      name: 'Paper Rings',
      url: 'assets/sounds/lover/paperrings.mp3',
      album: 'Lover',
      image: 'assets/images/lover/daylight.jfif',
      lyrics: '“I like shiny things, but I’d marry you with paper rings.”',
      timedLyrics: [
        { time: 0, text: 'I like shiny things, but I’d marry you with paper rings, uh-huh, that’s right!' },
        { time: 8, text: 'Darling, you’re the one I want!' }
      ]
    },
    {
      name: 'The Man',
      url: 'assets/sounds/lover/theman.mp3',
      album: 'Lover',
      image: 'assets/images/lover/the man.jfif',
      lyrics: '“I’d be a fearless leader, I’d be an alpha type.”',
      timedLyrics: [
        { time: 0, text: 'I’d be a fearless leader, I’d be an alpha type' },
        { time: 8, text: '‘Cause if I was a man, then I’d be the man!' }
      ]
    },
    {
      name: 'Death By A Thousand Cuts',
      url: 'assets/sounds/lover/deathbyathousandcuts.mp3',
      album: 'Lover',
      image: 'assets/images/lover/deathbyathousandcuts.jfif',
      lyrics: '“Saying goodbye is death by a thousand cuts.”',
      timedLyrics: [
        { time: 0, text: 'My heart, my hips, my body, my love, trying to find a part of me that you didn’t touch' },
        { time: 8, text: 'Gave up on me like I was a bad drug' },
        { time: 15, text: 'Now I’m searching for signs in a haunted club' },
        { time: 22, text: '‘Cause saying goodbye is death by a thousand cuts!' }
      ]
    },
    {
      name: 'I Think He Knows',
      url: 'assets/sounds/lover/ithinkheknows.mp3',
      album: 'Lover',
      image: 'assets/images/lover/ithinkheknows.jfif',
      lyrics: '“I think he knows his hands around a cold glass make me wanna know that body like it’s mine.”',
      timedLyrics: [
        { time: 0, text: 'I think he knows his hands around a cold glass' },
        { time: 6, text: 'Make me wanna know that body like it’s mine' },
        { time: 13, text: 'He got that boyish look that I like in a man' },
        { time: 20, text: 'I am an architect, I’m drawing up the plans!' }
      ]
    },
    {
      name: 'Afterglow',
      url: 'assets/sounds/lover/afterglow.mp3',
      album: 'Lover',
      image: 'assets/images/lover/afterglow.jfif',
      lyrics: '“Meet me in the afterglow.”',
      timedLyrics: [
        { time: 0, text: 'I blew things out of proportion, now you’re blue' },
        { time: 7, text: 'Put you in jail for something you didn’t do' },
        { time: 14, text: 'I’m the one who burned us down, but it’s not what I meant' },
        { time: 21, text: 'Sorry that I hurt you, I don’t wanna do this, meet me in the afterglow!' }
      ]
    },

    // Reputation
    {
      name: 'Delicate',
      url: 'assets/sounds/reputation/delicate.mp3',
      album: 'Reputation',
      image: 'assets/images/reputation/delicate.jfif',
      lyrics: '“This ain’t for the best, my reputation’s never been worse, so you must like me for me.”',
      timedLyrics: [
        { time: 0, text: 'This ain’t for the best, my reputation’s never been worse' },
        { time: 8, text: 'So you must like me for me' },
        { time: 16, text: '‘Cause I like you, isn’t it delicate?' }
      ]
    },
    {
      name: 'Gateway Car',
      url: 'assets/sounds/reputation/gatewaycar.mp3',
      album: 'Reputation',
      image: 'assets/images/reputation/reputation.jfif',
      lyrics: '“Nothing good starts in a getaway car!”',
      timedLyrics: [
        { time: 0, text: 'No, nothing good starts in a getaway car' },
        { time: 8, text: 'We were flying, but we’d never get far' }
      ]
    },
    {
      name: 'Look What You Made Me Do',
      url: 'assets/sounds/reputation/lwymmd.mp3',
      album: 'Reputation',
      image: 'assets/images/reputation/lwymmd.jfif',
      lyrics: '“I’m sorry, the old Taylor can’t come to the phone right now. Why? Oh, ‘cause she’s dead!”',
      timedLyrics: [
        { time: 0, text: 'Look what you made me do, look what you made me do!' },
        { time: 8, text: 'I’m sorry, the old Taylor can’t come to the phone right now. Why? Oh, ‘cause she’s dead!' }
      ]
    },
    {
      name: 'Gorgeous',
      url: 'assets/sounds/reputation/gorgeous.mp3',
      album: 'Reputation',
      image: 'assets/images/reputation/gorgeous.jfif',
      lyrics: '“You’re so gorgeous, I can’t say anything to your face.”',
      timedLyrics: [
        { time: 0, text: 'You’re so gorgeous, I can’t say anything to your face' },
        { time: 8, text: '‘Cause look at your face!' }
      ]
    },
    {
      name: 'End Game',
      url: 'assets/sounds/reputation/endgame.mp3',
      album: 'Reputation',
      image: 'assets/images/reputation/endgame.jfif',
      lyrics: '“I wanna be your endgame, I wanna be your first string.”',
      timedLyrics: [
        { time: 0, text: 'I wanna be your endgame, I wanna be your first string' },
        { time: 8, text: 'I wanna be your A-Team, I wanna be your endgame, endgame' }
      ]
    },
    {
      name: "This Is Why We Can't Have Nice Things",
      url: 'assets/sounds/reputation/nicethings.mp3',
      album: 'Reputation',
      image: 'assets/images/reputation/reputation.jfif',
      lyrics: '“This is why we can’t have nice things, darling!”',
      timedLyrics: [
        { time: 0, text: 'This is why we can’t have nice things, darling!' },
        { time: 8, text: 'Because you break them, I had to take them away!' }
      ]
    },
    {
      name: 'Blame Me',
      url: 'assets/sounds/reputation/blameme.mp3',
      album: 'Reputation',
      image: 'assets/images/reputation/blameme.jfif',
      lyrics: '“Don’t blame me, love made me crazy, if it doesn’t you ain’t doin’ it right.”',
      timedLyrics: [
        { time: 0, text: 'Don’t blame me, love made me crazy' },
        { time: 8, text: 'If it doesn’t, you ain’t doin’ it right!' }
      ]
    },
    {
      name: 'King Heart',
      url: 'assets/sounds/reputation/kingheart.mp3',
      album: 'Reputation',
      image: 'assets/images/reputation/reputation.jfif',
      lyrics: '“And all at once, you are the one I have been waiting for, king of my heart.”',
      timedLyrics: [
        { time: 0, text: 'And all at once, you are the one I have been waiting for' },
        { time: 8, text: 'King of my heart, body and soul!' }
      ]
    },
    {
      name: '...Ready For It?',
      url: 'assets/sounds/reputation/readyforit.mp3',
      album: 'Reputation',
      image: 'assets/images/reputation/readyforit.jfif',
      lyrics: '“Baby, let the games begin! Are you ready for it?”',
      timedLyrics: [
        { time: 0, text: 'Knew he was a killer first time that I saw him' },
        { time: 7, text: 'Wondered how many girls he had loved and left haunted' },
        { time: 14, text: 'In the middle of the night, in my dreams, you should see the things we do, baby' },
        { time: 23, text: 'Baby, let the games begin! Are you ready for it?' }
      ]
    },
    {
      name: 'Call It What You Want',
      url: 'assets/sounds/reputation/callitwhatyouwant.mp3',
      album: 'Reputation',
      image: 'assets/images/reputation/callitwhatyouwant.jfif',
      lyrics: '“Call it what you want, yeah, call it what you want to.”',
      timedLyrics: [
        { time: 0, text: 'My castle crumbled overnight, I brought a knife to a gunfight' },
        { time: 8, text: 'They took the crown, but it’s alright' },
        { time: 15, text: '‘Cause all the liars are calling me one, nobody’s heard from me for months' },
        { time: 23, text: 'I’m doing better than I ever was, ‘cause my baby’s fit like a daydream' },
        { time: 31, text: 'Call it what you want, yeah, call it what you want to!' }
      ]
    },
    {
      name: 'I Did Something Bad',
      url: 'assets/sounds/reputation/ididsomethingbad.mp3',
      album: 'Reputation',
      image: 'assets/images/reputation/ididsomethingbad.jfif',
      lyrics: '“They say I did something bad, then why’s it feel so good?”',
      timedLyrics: [
        { time: 0, text: 'I never trust a narcissist, but they love me' },
        { time: 7, text: 'So I play ‘em like a violin and I make ‘em tell the truth' },
        { time: 14, text: 'They say I did something bad, then why’s it feel so good?' },
        { time: 22, text: 'They say I did something bad, but why’s it feel so good? Most fun I ever had!' }
      ]
    },

    // Folklore (New Album!)
    {
      name: 'Cardigan',
      url: 'assets/sounds/folklore/cardigan.mp3',
      album: 'Folklore',
      image: 'assets/images/folklore/cardigan.jfif',
      lyrics: '“And when I felt like I was an old cardigan under someone’s bed, you put me on and said I was your favorite.”',
      timedLyrics: [
        { time: 0, text: 'Vintage tee, brand new phone, high heels on cobblestones' },
        { time: 7, text: 'When you are young, they assume you know nothing' },
        { time: 15, text: 'And when I felt like I was an old cardigan under someone’s bed' },
        { time: 23, text: 'You put me on and said I was your favorite.' }
      ]
    },
    {
      name: 'Exile',
      url: 'assets/sounds/folklore/exile.mp3',
      album: 'Folklore',
      image: 'assets/images/folklore/exile.jfif',
      lyrics: '“I think I’ve seen this film before, and I didn’t like the ending.”',
      timedLyrics: [
        { time: 0, text: 'I can see you standing, honey, with his arms around your body' },
        { time: 8, text: 'Laughin’, but the joke’s not funny at all' },
        { time: 16, text: 'I think I’ve seen this film before, and I didn’t like the ending' },
        { time: 25, text: 'You’re not my homeland anymore, so what am I defending now?' }
      ]
    },
    {
      name: 'August',
      url: 'assets/sounds/folklore/august.mp3',
      album: 'Folklore',
      image: 'assets/images/folklore/august.jfif',
      lyrics: '“August slipped away into a moment in time, ‘cause it was never mine.”',
      timedLyrics: [
        { time: 0, text: 'Salt air, and the rust on your door' },
        { time: 7, text: 'I never needed anything more' },
        { time: 14, text: 'Whispers of ‘Are you sure?’ ‘Never have I ever before’' },
        { time: 21, text: 'August slipped away into a moment in time, ‘cause it was never mine!' }
      ]
    },
    {
      name: 'The 1',
      url: 'assets/sounds/folklore/the1.mp3',
      album: 'Folklore',
      image: 'assets/images/folklore/the1.jfif',
      lyrics: '“If one thing had been different, would everything be different today?”',
      timedLyrics: [
        { time: 0, text: 'I’m doing good, I’m on some new shit' },
        { time: 6, text: 'Been saying ‘yes’ instead of ‘no’' },
        { time: 12, text: 'And if you wanted me, you really should’ve showed' },
        { time: 19, text: 'And if one thing had been different, would everything be different today?' }
      ]
    },
    {
      name: 'Betty',
      url: 'assets/sounds/folklore/betty.mp3',
      album: 'Folklore',
      image: 'assets/images/folklore/betty.jfif',
      lyrics: '“Betty, I won’t make assumptions about why you switched your homeroom.”',
      timedLyrics: [
        { time: 0, text: 'Betty, I won’t make assumptions about why you switched your homeroom' },
        { time: 8, text: 'I think it’s ‘cause of me' },
        { time: 15, text: 'Betty, one time I was walking on my skateboard and passed your house' }
      ]
    },
    {
      name: 'Mirrorball',
      url: 'assets/sounds/folklore/mirrorball.mp3',
      album: 'Folklore',
      image: 'assets/images/folklore/mirrorball.jfif',
      lyrics: '“I’m a mirrorball, I’ll show you every version of yourself tonight.”',
      timedLyrics: [
        { time: 0, text: 'I want you to know, I’m a mirrorball' },
        { time: 8, text: 'I’ll show you every version of yourself tonight' },
        { time: 16, text: 'I’ll get you out on the floor, shimmering beautiful!' }
      ]
    },

    // Midnights (New Album!)
    {
      name: 'Anti-Hero',
      url: 'assets/sounds/midnights/antihero.mp3',
      album: 'Midnights',
      image: 'assets/images/midnights/antihero.jfif',
      lyrics: '“It’s me, hi, I’m the problem, it’s me.”',
      timedLyrics: [
        { time: 0, text: 'I have this thing where I get older, but just never wiser' },
        { time: 8, text: 'Midnights become my afternoons' },
        { time: 15, text: 'When my depression works the graveyard shift, all of the people I’ve ghosted stand there in the room' },
        { time: 24, text: 'It’s me, hi, I’m the problem, it’s me!' },
        { time: 31, text: 'At tea time, everybody agrees' },
        { time: 37, text: 'I’ll stare directly at the sun, but never in the mirror' },
        { time: 44, text: 'It must be exhausting always rooting for the anti-hero!' }
      ]
    },
    {
      name: 'Lavender Haze',
      url: 'assets/sounds/midnights/lavenderhaze.mp3',
      album: 'Midnights',
      image: 'assets/images/midnights/lavenderhaze.jfif',
      lyrics: '“I just wanna stay in that lavender haze.”',
      timedLyrics: [
        { time: 0, text: 'Meet me at midnight' },
        { time: 6, text: 'Starry eyes sparking up my darkest night' },
        { time: 13, text: 'The 1950s shit they want from me' },
        { time: 20, text: 'I just wanna stay in that lavender haze!' }
      ]
    },
    {
      name: 'Karma',
      url: 'assets/sounds/midnights/karma.mp3',
      album: 'Midnights',
      image: 'assets/images/midnights/karma.jfif',
      lyrics: '“Karma is my boyfriend, karma is a god, karma is the breeze in my hair on the weekend.”',
      timedLyrics: [
        { time: 0, text: 'You’re talking shit for the hell of it, addicted to betrayal, but you’re relevant' },
        { time: 8, text: '‘Cause karma is my boyfriend, karma is a god' },
        { time: 15, text: 'Karma is the breeze in my hair on the weekend' },
        { time: 22, text: 'Karma’s a relaxing thought, aren’t you envious that for you it’s not?' }
      ]
    },
    {
      name: 'Bejeweled',
      url: 'assets/sounds/midnights/bejeweled.mp3',
      album: 'Midnights',
      image: 'assets/images/midnights/bejeweled.jfif',
      lyrics: '“Best believe I’m still bejeweled, when I walk in the room, I can still make the whole place shimmer!”',
      timedLyrics: [
        { time: 0, text: 'Baby love, I think I’ve been a little too kind' },
        { time: 7, text: 'Didn’t notice you walking all over my peace of mind' },
        { time: 15, text: 'Best believe I’m still bejeweled, when I walk in the room, I can still make the whole place shimmer!' }
      ]
    },
    {
      name: 'Midnight Rain',
      url: 'assets/sounds/midnights/midnightrain.mp3',
      album: 'Midnights',
      image: 'assets/images/midnights/midnightrain.jfif',
      lyrics: '“He was sunshine, I was midnight rain.”',
      timedLyrics: [
        { time: 0, text: 'Rain, he wanted it comfortable, I wanted that pain' },
        { time: 7, text: 'He wanted a bride, I was making my own name' },
        { time: 14, text: 'He was sunshine, I was midnight rain!' }
      ]
    },
    {
      name: "You're On Your Own, Kid",
      url: 'assets/sounds/midnights/youreonyourownkid.mp3',
      album: 'Midnights',
      image: 'assets/images/midnights/youreonyourownkid.jfif',
      lyrics: '“So make the friendship bracelets, take the moment and taste it, you’ve got no reason to be afraid.”',
      timedLyrics: [
        { time: 0, text: 'Summer went along like a song, wait for the bus, every stop I see you' },
        { time: 8, text: 'I hosted parties and starved my body like I’d be saved by a perfect kiss' },
        { time: 16, text: 'So make the friendship bracelets, take the moment and taste it' },
        { time: 24, text: 'You’ve got no reason to be afraid, you’re on your own, kid, yeah, you can face this!' }
      ]
    }
  ];

  getAllSongs(): Song[] {
    return this.allSongs;
  }

  getSongsByAlbum(album: string): Song[] {
    return this.allSongs.filter(s => s.album.toLowerCase() === album.toLowerCase());
  }

  getEraInfo(albumName: string): AlbumEraInfo | undefined {
    return this.albumEras[albumName];
  }

  getCurrentLyric(songName: string, currentTime: number): string {
    const song = this.allSongs.find(s => s.name.toLowerCase() === songName.toLowerCase());
    if (!song) return '';
    if (!song.timedLyrics || song.timedLyrics.length === 0) {
      return song.lyrics || '♪ Music Playing ♪';
    }
    if (currentTime < song.timedLyrics[0].time) {
      return '♪ Intro • Music Playing ♪';
    }
    for (let i = song.timedLyrics.length - 1; i >= 0; i--) {
      if (currentTime >= song.timedLyrics[i].time) {
        return song.timedLyrics[i].text;
      }
    }
    return song.timedLyrics[0].text;
  }

  searchSongs(query: string): Song[] {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return this.allSongs.filter(s => 
      s.name.toLowerCase().includes(q) || s.album.toLowerCase().includes(q)
    );
  }
}
