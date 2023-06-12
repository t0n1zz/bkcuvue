<?php

namespace App\Exports;


use App\Presensi;
use App\PresensiAlpa;
use App\PresensiIzin;
use App\PresensiKeluarKantor;
use App\PresensiKeterlambatan;
use App\PresensiKuliah;
use App\PresensiOffBergilir;
use App\PresensiPulangAwal;
use Illuminate\Support\Facades\DB;
use Maatwebsite\Excel\Concerns\FromArray;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithCustomStartCell;
use Maatwebsite\Excel\Events\AfterSheet;
use Maatwebsite\Excel\Concerns\WithEvents;
use \Maatwebsite\Excel\Sheet;
use Maatwebsite\Excel\Concerns\WithTitle;

class LaporanPresensiExport2 implements FromArray, WithHeadings, WithCustomStartCell, WithEvents, WithTitle
{

    protected $id_cu, $bulan, $tahun;

    function __construct($id_cu, $bulan, $tahun)
    {
        $this->id_cu = $id_cu;
        $this->bulan = $bulan;
        $this->tahun = $tahun;
    }

    public function startCell(): string
    {
        return 'A4';
    }

    public function registerEvents(): array
    {

        return [
            AfterSheet::class => function (AfterSheet $event) {
                /** @var Sheet $sheet */
                $sheet = $event->sheet;

                $sheet->mergeCells('A1:A3');
                $sheet->setCellValue('A1', "NO.");

                $sheet->mergeCells('B1:B3');
                $sheet->setCellValue('B1', "NAMA");

                $sheet->mergeCells('C1:C3');
                $sheet->setCellValue('C1', "JABATAN");

                $sheet->mergeCells('D1:F1');
                $sheet->setCellValue('D1', "MASUK KERJA");

                $sheet->mergeCells('D2:D3');
                $sheet->setCellValue('D2', "KANTOR");

                $sheet->mergeCells('E2:E3');
                $sheet->setCellValue('E2', "WFH");

                $sheet->mergeCells('F2:F3');
                $sheet->setCellValue('F2', "KEGIATAN KANTOR");

                $sheet->mergeCells('G1:L1');
                $sheet->setCellValue('G1', "TIDAK MASUK KERJA");

                $sheet->mergeCells('G2:G3');
                $sheet->setCellValue('G2', "IZIN");

                $sheet->mergeCells('H2:H3');
                $sheet->setCellValue('H2', "SAKIT");

                $sheet->mergeCells('I2:I3');
                $sheet->setCellValue('I2', "CUTI");

                $sheet->mergeCells('J2:J3');
                $sheet->setCellValue('J2', "OFF");

                $sheet->mergeCells('K2:K3');
                $sheet->setCellValue('K2', "KULIAH");

                $sheet->mergeCells('L2:L3');
                $sheet->setCellValue('L2', "ALPA");

                $sheet->mergeCells('M1:P1');
                $sheet->setCellValue('M1', "IZIN PADA SAAT JAM KERJA");

                $sheet->mergeCells('M2:M3');
                $sheet->setCellValue('M2', "LAMBAT");

                $sheet->mergeCells('N2:N3');
                $sheet->setCellValue('N2', "KELUAR");

                $sheet->mergeCells('O2:O3');
                $sheet->setCellValue('O2', "PULANG AWAL");

                $sheet->mergeCells('P2:P3');
                $sheet->setCellValue('P2', "WAKTU PENGURANG");

                $sheet->mergeCells('Q1:Q3');
                $sheet->setCellValue('Q1', "TIDAK PAKAI SERAGAM KERJA");

                $sheet->mergeCells('R1:R3');
                $sheet->setCellValue('R1', "KETERANGAN");

                $styleArray = [
                    'alignment' => [
                        'horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER,
                        'vertical' => \PhpOffice\PhpSpreadsheet\Style\Alignment::VERTICAL_CENTER,
                        'wrapText' => TRUE
                    ],
                ];

                $cellRange = 'A1:R3'; // All headers

                $event->sheet->getDelegate()->getStyle($cellRange)->applyFromArray($styleArray);
                $event->sheet->getDelegate()->getStyle("P1")->applyFromArray($styleArray);
                $event->sheet->getDelegate()->getColumnDimension('B')->setAutoSize(true);
                $event->sheet->getDelegate()->getColumnDimension('C')->setAutoSize(true);
                $event->sheet->getStyle($cellRange)->applyFromArray([
                    'borders' => [
                        'allBorders' => [
                            'borderStyle' => \PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THIN,
                            'color' => ['argb' => '000000'],
                        ],
                    ],
                ]);
            },
        ];
    }

    public function headings(): array
    {
        return [];
    }



    public function array(): array
    {

        $date = \Carbon\Carbon::parse($this->tahun . "-".$this->bulan . "-01");
        $model = DB::select('select users.id,users.id_cu,users.id_aktivis,aktivis.name,aktivis.gambar,aktivis_pekerjaan.id_aktivis,aktivis_pekerjaan.tingkat,aktivis_pekerjaan.selesai, aktivis_pekerjaan.id_tempat,aktivis_pekerjaan.name as jabatan  from users
        inner join aktivis on aktivis.id = users.id_aktivis inner join aktivis_pekerjaan on aktivis_pekerjaan.id_aktivis = aktivis.id
        where users.id_cu = 0 and users.id_aktivis !=0 and users.status = 1 and aktivis_pekerjaan.selesai is null and aktivis_pekerjaan.id_tempat =1 and (aktivis_pekerjaan.tingkat = 5 or aktivis_pekerjaan.tingkat =6 or aktivis_pekerjaan.tingkat =7 or aktivis_pekerjaan.tingkat =8)  order by aktivis.name asc');
        $start = $date->startOfMonth()->format('Y-m-d H:i:s');
        $end = $date->endOfMonth()->format('Y-m-d H:i:s');
        $keterlambatanS = PresensiKeterlambatan::with('aktivis')->where('created_at', '>=', $start)->where('created_at', '<=', $end)->select('id_user', 'lama')->get();
        $masukKantorS = Presensi::with('aktivis.pekerjaan_aktif')->where('id_kegiatan', 0)->where('kegiatan_name', '=', null)->where('created_at', '>=', $start)->where('created_at', '<=', $end)->select('id_user','id','id_aktivis','name')->get();
        $kegiatanS = Presensi::where("id_kegiatan", "!=", 0)->where('created_at', '>=', $start)->where('created_at', '<=', $end)->select('id_user')->get();
        $kegiatanS2 = Presensi::where("kegiatan_name", "!=", null)->where('created_at', '>=', $start)->where('created_at', '<=', $end)->select('id_user')->get();
        $izinS = PresensiIzin::where('jenis', 'izin')->where('created_at', '>=', $start)->where('created_at', '<=', $end)->select('id_user')->get();
        $sakitS = PresensiIzin::where('jenis', 'sakit')->where('created_at', '>=', $start)->where('created_at', '<=', $end)->select('id_user')->get();
        $offS = PresensiOffBergilir::where('created_at', '>=', $start)->where('created_at', '<=', $end)->select('id_user')->get();
        $alpaS = PresensiAlpa::where('created_at', '>=', $start)->where('created_at', '<=', $end)->select('id_user')->get();
        $kuliahS = PresensiKuliah::where('created_at', '>=', $start)->where('created_at', '<=', $end)->select('id_user')->get();
        $keluarS = PresensiKeluarKantor::where('created_at', '>=', $start)->where('created_at', '<=', $end)->select('id_user', 'lama')->get();
        $pulangAwalS = PresensiPulangAwal::where('created_at', '>=', $start)->where('created_at', '<=', $end)->select('id_user', 'lama')->get();
        $seragamS = Presensi::with('seragamKerja')->where('id_kegiatan', 0)->where('kegiatan_name','=',null)->where('created_at', '>=', $start)->where('created_at', '<=', $end)->select('id_user', 'id')->get();
        
        $masukKantorGroupBy = $masukKantorS->groupBy('id_user');
        $keterlambatanGroupBy = $keterlambatanS->groupBy('id_user');
        $kegiatanGroupBy = $kegiatanS->groupBy('id_user');
        $kegiatan2GroupBy = $kegiatanS2->groupBy('id_user');
        $izinGroupBy = $izinS->groupBy('id_user');
        $sakitGroupBy = $sakitS->groupBy('id_user');
        $offGroupBy = $offS->groupBy('id_user');
        $alpaGroupBy = $alpaS->groupBy('id_user');
        $keluarGroupBy = $keluarS->groupBy('id_user');
        $pulangAwalGroupBy = $pulangAwalS->groupBy('id_user');
        $seragamGroupBy = $seragamS->groupBy('id_user');
        $kuliahGroupBy = $kuliahS->groupBy('id_user');
        $no = 1;
        $arrayComplete = [];
        foreach ($model as $aktivis) {
                $jabatan = $aktivis->jabatan;
                $name = $aktivis->name;
                $sumLambat = 0;
                $sumKeluar = 0;
                $sumPulangAwal = 0;
                $sumSeragam=0;
                $seragam = 0;
                $kantor = isset($masukKantorGroupBy[$aktivis->id]) ? count($masukKantorGroupBy[$aktivis->id]) : 0;
                $lambat = 0;
                $kegiatan = isset($kegiatanGroupBy[$aktivis->id]) ? count($kegiatanGroupBy[$aktivis->id]) : 0;
                $kegiatan2 = isset($kegiatan2GroupBy[$aktivis->id]) ? count($kegiatan2GroupBy[$aktivis->id]) : 0;
                $izin = isset($izinGroupBy[$aktivis->id]) ? count($izinGroupBy[$aktivis->id]) : 0;
                $sakit = isset($sakitGroupBy[$aktivis->id]) ? count($sakitGroupBy[$aktivis->id]) : 0;
                $off = isset($offGroupBy[$aktivis->id])? count($offGroupBy[$aktivis->id]) : 0;
                $alpa = isset($alpaGroupBy[$aktivis->id]) ? count($alpaGroupBy[$aktivis->id]) : 0;
                $keluar = isset($keluarGroupBy[$aktivis->id])? count($keluarGroupBy[$aktivis->id]) : 0;
                $pulangAwal = isset($pulangAwalGroupBy[$aktivis->id]) ? count($pulangAwalGroupBy[$aktivis->id]) : 0;
                $kuliah = isset($kuliahGroupBy[$aktivis->id]) ? count($kuliahGroupBy[$aktivis->id]) :0;
                $seragam = isset($seragamGroupBy[$aktivis->id]) ? $seragamGroupBy[$aktivis->id] : 0;

               

                if(isset($keterlambatanGroupBy[$aktivis->id])){
                    $lambat= count($keterlambatanGroupBy[$aktivis->id]);
                }

               
                if ($lambat != 0) {
                    foreach ($keterlambatanGroupBy[$aktivis->id] as $late) {
                        $sumLambat = $sumLambat + $late->lama;
                    }
                }

                if ($seragam) {
                    $sumSeragam = count($seragam->where('seragamKerja', '!=', null));
                }

                if ($keluar != 0) {
                    foreach ($keluarGroupBy[$aktivis->id] as $out) {
                        $sumKeluar = $sumKeluar + $out->lama;
                    }
                }

                if ($pulangAwal != 0) {
                    foreach ($pulangAwalGroupBy[$aktivis->id] as $pulang) {
                        $sumPulangAwal = $sumPulangAwal + $pulang->lama;
                    }
                }

                $array3 = [];
                array_push($array3, $no); //jabatan
                array_push($array3, $name);//name
                array_push($array3, $jabatan); //jabatan
                array_push($array3, $kantor); //kantor
                array_push($array3, 0); //wfh
                array_push($array3, $kegiatan+$kegiatan2); //kegiatan
                array_push($array3, $izin); //izin
                array_push($array3, $sakit); //sakit
                array_push($array3, 0); //cuti
                array_push($array3, $off); //off
                array_push($array3, $kuliah); //kuliah
                array_push($array3, $alpa); //alpa
                array_push($array3, $sumLambat); //lambat
                array_push($array3, $sumKeluar); //keluar
                array_push($array3, $sumPulangAwal); //pulang awal
                array_push($array3, 0); //waktu pengurang
                array_push($array3, $sumSeragam); //tidak pakai seragam
                array_push($array3, ''); //keterangan
                array_push($arrayComplete, $array3);
                $no++;
      
        }

        return $arrayComplete;
    }

    public function title(): string
    {
        return $this->bulan;
    }
}
