<?php

namespace App\Exports;

use App\Presensi;
use App\PresensiAlpa;
use App\PresensiIzin;
use App\PresensiKuliah;
use App\PresensiOffBergilir;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use Maatwebsite\Excel\Concerns\FromArray;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithCustomStartCell;
use Maatwebsite\Excel\Events\AfterSheet;
use Maatwebsite\Excel\Concerns\WithEvents;
use \Maatwebsite\Excel\Sheet;
use Maatwebsite\Excel\Concerns\WithTitle;

class PNG implements FromArray, WithHeadings, WithCustomStartCell, WithEvents, WithTitle
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

                $sheet->mergeCells('A2:A3');
                $sheet->setCellValue('A2', "NO.");

                $sheet->mergeCells('B2:B3');
                $sheet->setCellValue('B2', "NAMA");

                $sheet->mergeCells('C2:C3');
                $sheet->setCellValue('C2', "JABATAN");

                $sheet->mergeCells('D2:D3');
                $sheet->setCellValue('D2', "JLH KEHADIRAN");

                $sheet->mergeCells('E2:E3');
                $sheet->setCellValue('E2', "HADIR (HARI)");

                $sheet->mergeCells('F2:F3');
                $sheet->setCellValue('F2', "KEG KTR (HARI)");

                $sheet->mergeCells('G2:H2');
                $sheet->setCellValue('G2', "TERLAMBAT (MENIT)");

                $sheet->setCellValue('G3', "PRIBADI");
                $sheet->setCellValue('H3', "TANPA KET.");

                $sheet->mergeCells('I2:I3');
                $sheet->setCellValue('I2', "KALI");

                $sheet->mergeCells('J2:K2');
                $sheet->setCellValue('J2', "KELUAR (MENIT)");

                $sheet->setCellValue('J3', "PRIBADI");
                $sheet->setCellValue('K3', "KANTOR");

                $sheet->mergeCells('L2:L3');
                $sheet->setCellValue('L2', "KALI");

                $sheet->mergeCells('M2:N2');
                $sheet->setCellValue('M2', "PULANG (MENIT)");

                $sheet->setCellValue('M3', "PRIBADI");
                $sheet->setCellValue('N3', "KANTOR");

                $sheet->mergeCells('O2:O3');
                $sheet->setCellValue('O2', "KALI");

                $sheet->mergeCells('P2:S2');
                $sheet->setCellValue('P2', "SERAGAM KERJA");

                $sheet->setCellValue('P3', "PAKAIAN");
                $sheet->setCellValue('Q3', "SEPATU");
                $sheet->setCellValue('R3', "NAMETAG");
                $sheet->setCellValue('S3', "IKAT PGN");

                $sheet->mergeCells('T2:U2');
                $sheet->setCellValue('T2', "CUTI (A)");
                $sheet->setCellValue('T3', "TAHUNAN");
                $sheet->setCellValue('U3', "KHUSUS");

                $sheet->mergeCells('V2:W2');
                $sheet->setCellValue('V2', "IZIN (B)");
                $sheet->setCellValue('V3', "PRIBADI");
                $sheet->setCellValue('W3', "SAKIT");

                $sheet->mergeCells('X2:X3');
                $sheet->setCellValue('X2', "ALPA");

                $sheet->mergeCells('Y2:Y3');
                $sheet->setCellValue('Y2', "OFF");

                $sheet->mergeCells('Z2:Z3');
                $sheet->setCellValue('Z2', "KULIAH");

                $sheet->mergeCells('AA2:AA3');
                $sheet->setCellValue('AA2', "WFH");

                $sheet->mergeCells('AB2:AB3');
                $sheet->setCellValue('AB2', "SISA CUTI");

                $sheet->mergeCells('AC2:AC3');
                $sheet->setCellValue('AC2', "JUMLAH A+B");

                $sheet->mergeCells('AD2:AD3');
                $sheet->setCellValue('AD2', "JATAH CUTI DAN IZIN");

                $sheet->mergeCells('AE2:AE3');
                $sheet->setCellValue('AE2', "KELEBIHAN CUTI DAN IZIN");

                $styleArray = [
                    'alignment' => [
                        'horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER,
                        'vertical' => \PhpOffice\PhpSpreadsheet\Style\Alignment::VERTICAL_CENTER,
                        'wrapText' => TRUE
                    ],
                ];

                $cellRange = 'A2:AE3'; // All headers

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

        // dd();
        return [];
    }



    public function array(): array
    {
        $date = \Carbon\Carbon::parse('2023' . "-" . '01' . "-01");
        $model = DB::select('select users.id,users.id_cu,users.id_aktivis,aktivis.name,aktivis.gambar,aktivis_pekerjaan.id_aktivis,aktivis_pekerjaan.tingkat,aktivis_pekerjaan.selesai, aktivis_pekerjaan.id_tempat,aktivis_pekerjaan.name as jabatan  from users
        inner join aktivis on aktivis.id = users.id_aktivis inner join aktivis_pekerjaan on aktivis_pekerjaan.id_aktivis = aktivis.id
        where users.id_cu = 0 and users.id_aktivis !=0 and users.status = 1 and aktivis_pekerjaan.selesai is null and aktivis_pekerjaan.id_tempat =1 and (aktivis_pekerjaan.tingkat = 5 or aktivis_pekerjaan.tingkat =6 or aktivis_pekerjaan.tingkat =7 or aktivis_pekerjaan.tingkat =8)  order by aktivis.name asc');
        $masukKantorS = Presensi::with('seragam', 'keterlambatanP', 'keterlambatanK', 'keluarP', 'keluarK', 'pulangP', 'pulangK', 'aktivis.pekerjaan_aktif')->where('id_kegiatan', 0)->where('kegiatan_name','=',null)->whereYear('created_at', '=', Carbon::parse($date)->format('Y'))->select('id_user', 'id', 'id_aktivis')->get(); //b
        $kegiatanS = Presensi::with('seragam')->where("id_kegiatan", "!=", 0)->orWhere('kegiatan_name','!=',null)->whereYear('created_at', '=', Carbon::parse($date)->format('Y'))->select('id_user')->get();
        $izinS = PresensiIzin::where('jenis', 'izin')->whereYear('created_at', '=', Carbon::parse($date)->format('Y'))->select('id_user')->get();
        $sakitS = PresensiIzin::where('jenis', 'sakit')->whereYear('created_at', '=', Carbon::parse($date)->format('Y'))->select('id_user')->get();
        $offS = PresensiOffBergilir::whereYear('created_at', '=', Carbon::parse($date)->format('Y'))->select('id_user')->get();
        $alpaS = PresensiAlpa::whereYear('created_at', '=', Carbon::parse($date)->format('Y'))->select('id_user')->get();
        $kuliahS = PresensiKuliah::whereYear('created_at', '=', Carbon::parse($date)->format('Y'))->select('id_user')->get();
        $arrayComplete = [];
        $no = 0;
        foreach ($model as $aktivis) {
            $name = $aktivis->name;
            $jabatan = $aktivis->jabatan;
            $kegiatan = 0;
            $kuliah = 0;
            $kantor = 0;
            $terlambatK = 0;
            $terlambatP = 0;
            $terlambatCount = 0;
            $keluarP = 0;
            $keluarK = 0;
            $keluarCount = 0;
            $pulangP = 0;
            $pulangK = 0;
            $pulangCount = 0;
            $seragamPakaian = 0;
            $seragamSepatu = 0;
            $seragamNameTag = 0;
            $seragamIkatPinggang = 0;
            $wfh = 0;
            $cutiTahunan = 0;
            $cutiKhusus = 0;
            $alpa = 0;
            $sakit = 0;
            $off = 0;
            $izin = 0;
            $kantor = isset($masukKantorS->groupBy('id_user')[$aktivis->id]) ? count($masukKantorS->groupBy('id_user')[$aktivis->id]) : 0;
            $izin = isset($izinS->groupBy('id_user')[$aktivis->id]) ? count($izinS->GroupBy('id_user')[$aktivis->id]) : 0;
            $sakit = isset($sakitS->groupBy('id_user')[$aktivis->id]) ? count($sakitS->GroupBy('id_user')[$aktivis->id]) : 0;
            $off = isset($offS->groupBy('id_user')[$aktivis->id]) ? count($offS->GroupBy('id_user')[$aktivis->id]) : 0;
            $alpa = isset($alpaS->groupBy('id_user')[$aktivis->id]) ? count($alpaS->GroupBy('id_user')[$aktivis->id]) : 0;
            $kuliah = isset($kuliahS->groupBy('id_user')[$aktivis->id]) ? count($kuliahS->GroupBy('id_user')[$aktivis->id]) : 0;

            if (isset($kegiatanS->groupBy('id_user')[$aktivis->id])) {
                $kegiatan = count($kegiatanS->groupBy('id_user')[$aktivis->id]);
            }


            if(isset($masukKantorS->groupBy('id_user')[$aktivis->id])){
                foreach ($masukKantorS->groupBy('id_user')[$aktivis->id] as $b) {
                    if ($b->keterlambatanK) {
                        $terlambatK = $terlambatK + $b->keterlambatanK->lama;
                        $terlambatCount++;
                    }

                    if ($b->keterlambatanP) {
                        $terlambatP = $terlambatP + $b->keterlambatanP->lama;
                        $terlambatCount++;
                    }

                    if ($b->pulangP) {
                        $pulangP = $pulangP + $b->pulangP->lama;
                        $pulangCount++;
                    }

                    if ($b->pulangK) {
                        $pulangK = $pulangK + $b->pulangK->lama;
                        $pulangCount++;
                    }

                    if (count($b->keluarP) > 0) {
                        foreach ($b->keluarP as $keluar) {
                            $keluarP = $keluarP + $keluar->lama;
                            $keluarCount++;
                        }
                    }

                    if (count($b->keluarK) > 0) {
                        foreach ($b->keluarK as $keluar) {
                            $keluarK = $keluarK + $keluar->lama;
                            $keluarCount++;
                        }
                    }

                    if (count($b->seragam) > 0) {
                        foreach ($b->seragam as $ser) {
                            if ($ser->id == 1) {
                                $seragamPakaian++;
                            } elseif ($ser->id == 2) {
                                $seragamSepatu++;
                            } elseif ($ser->id == 3) {
                                $seragamNameTag++;
                            } else {
                                $seragamIkatPinggang++;
                            }
                        }
                    }
                }
            }
            
            $no++;
            $array3 = [];
            array_push($array3, $no); //no
            array_push($array3, $name); //nama
            array_push($array3, $jabatan); //jabatan
            array_push($array3, $kantor + $kegiatan); //jlh_kehadiran
            array_push($array3, $kantor); //hadir kantor
            array_push($array3, $kegiatan); //hadir keg. kantor
            array_push($array3, $terlambatP); //terlamat pribadi
            array_push($array3, $terlambatK); //terlambat tanpa ket
            array_push($array3, $terlambatCount); //kali terlambat
            array_push($array3, $keluarP); //keluar pribadi
            array_push($array3, $keluarK); //keluar kantor
            array_push($array3, $keluarCount); //kali keluar
            array_push($array3, $pulangP); //pulang pribadi
            array_push($array3, $pulangK); //pulang kantor
            array_push($array3, $pulangCount); //kali pulang
            array_push($array3, $seragamPakaian); //pakaian
            array_push($array3, $seragamSepatu); //sepatu
            array_push($array3, $seragamNameTag); //nametag
            array_push($array3, $seragamIkatPinggang); //ikat pinggang
            array_push($array3, $cutiTahunan); //cuti tahunan
            array_push($array3, $cutiKhusus); //cuti_khusus
            array_push($array3, $izin); //izin pribadi
            array_push($array3, $sakit); //izin sakit
            array_push($array3, $alpa); //alpa
            array_push($array3, $off); //off
            array_push($array3, $kuliah); //kuliah
            array_push($array3, $wfh); //wfh
            array_push($array3, 12 - $cutiTahunan); //sisa cuti
            array_push($array3, $izin + $sakit + $cutiKhusus + $cutiTahunan); //jlh izin + cuti
            array_push($array3, 24); //jatah cuti dan izin
            array_push($array3, 24 - ($izin + $sakit + $cutiKhusus + $cutiTahunan)); //kelebihan cuti dan izin
            array_push($arrayComplete, $array3);
        }

        return $arrayComplete;
    }

    public function title(): string
    {
        return 'PNG';
    }
}
