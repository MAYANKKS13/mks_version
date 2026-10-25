import { TestBed } from '@angular/core/testing';
import { SongCatalogService } from './song-catalog.service';

describe('SongCatalogService', () => {
  let service: SongCatalogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SongCatalogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return all songs across eras', () => {
    const songs = service.getAllSongs();
    expect(songs.length).toBeGreaterThan(20);
  });

  it('should return era info for 1989', () => {
    const info = service.getEraInfo('1989');
    expect(info).toBeTruthy();
    expect(info?.year).toBe('2014');
  });

  it('should search songs matching query', () => {
    const results = service.searchSongs('Blank');
    expect(results.length).toBeGreaterThan(0);
    expect(results[0].name).toBe('Blank Space');
  });

  it('should return timed lyrics for Blank Space at different times', () => {
    const introLyric = service.getCurrentLyric('Blank Space', 2);
    expect(introLyric).toContain('Nice to meet you');

    const chorusLyric = service.getCurrentLyric('Blank Space', 45);
    expect(chorusLyric).toContain('nightmare dressed like a daydream');
  });
});
