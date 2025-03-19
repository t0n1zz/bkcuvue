<?php

namespace App\Exports;

use App\Cu;
use App\Monitoring as AppMonitoring;
use Carbon\Carbon;
use Maatwebsite\Excel\Concerns\FromArray;
use Maatwebsite\Excel\Concerns\WithColumnFormatting;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithCustomStartCell;
use Maatwebsite\Excel\Events\AfterSheet;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Concerns\WithTitle;
use \Maatwebsite\Excel\Sheet;

class MonitoringKonsolidasi implements FromArray, WithHeadings, WithCustomStartCell, WithEvents, WithTitle,WithColumnFormatting
{

    protected $tahun, $bulan,$nama_bulan;

    function __construct($tahun, $bulan)
    {
        $this->tahun = $tahun;
        $this->bulan = $bulan;

        $this->nama_bulan = 'Januari';
        switch ($this->bulan) {
            case 1:
                $this->nama_bulan = 'Januari';
                break;
            case 2:
                $this->nama_bulan = 'Februari';
                break;
            case 3:
                $this->nama_bulan = 'Maret';
                break;
            case 4:
                $this->nama_bulan = 'April';
                break;
            case 5:
                $this->nama_bulan = 'Mei';
                break;
            case 6:
                $this->nama_bulan = 'Juni';
                break;
            case 7:
                $this->nama_bulan = 'Juli';
                break;
            case 8:
                $this->nama_bulan = 'Agustus';
                break;
            case 9:
                $this->nama_bulan = 'September';
                break;
            case 10:
                $this->nama_bulan = 'October';
                break;
            case 11:
                $this->nama_bulan = 'November';
                break;
            case 12:
                $this->nama_bulan = 'Desember';
                break;
        }
    }

    public function startCell(): string
    {
        return 'A6';
    }

    public function registerEvents(): array
    {

        return [
            AfterSheet::class => function (AfterSheet $event) {
                /** @var Sheet $sheet */
                $sheet = $event->sheet;

                $sheet->mergeCells('A1:R1');
                $sheet->mergeCells('A2:R2');
                $sheet->mergeCells('A3:A5');
                $sheet->mergeCells('B3:B5');
                $sheet->mergeCells('C3:C5');
                $sheet->mergeCells('D3:D5');
                $sheet->mergeCells('E3:H3');
                $sheet->mergeCells('E4:F4');
                $sheet->mergeCells('G4:H4');
                $sheet->mergeCells('I3:I5');
                $sheet->mergeCells('J3:L4');
                $sheet->mergeCells('M3:Q3');
                $sheet->mergeCells('M4:M5');
                $sheet->mergeCells('N4:N5');
                $sheet->mergeCells('O4:O5');
                $sheet->mergeCells('P4:Q4');
                $sheet->mergeCells('R3:R5');
                $sheet->mergeCells('A52:C52');
                $sheet->mergeCells('A55:F55');

                
                $sheet->setCellValue('A1', "Laporan Monitoring PUSKOPCUINA Via SIMO");
                $sheet->setCellValue('A2', "Bulan : ". $this->nama_bulan);
                $sheet->setCellValue('A3', "No.");
                $sheet->setCellValue('B3', "Credit Union");
                $sheet->setCellValue('C3', "BA");
                $sheet->setCellValue('D3', "Jumlah Rekomendasi");
                $sheet->setCellValue('E3', "Pencapaian Rekomendasi");
                $sheet->setCellValue('E4', "Jumlah");
                $sheet->setCellValue('E5', "Tercapai");
                $sheet->setCellValue('F5', "Tidak Tercapai");
                $sheet->setCellValue('G4', "Persentase");
                $sheet->setCellValue('G5', "Tercapai");
                $sheet->setCellValue('H5', "Tidak Tercapai");
                $sheet->setCellValue('I3', "Kategori Pencapaian Rekomendasi Pemeriksaan");
                $sheet->setCellValue('J3', "Pertumbuhan Rekomendasi Tahun Ini");
                $sheet->setCellValue('J5', "Desember Tahun Lalu");
                $sheet->setCellValue('K5', "Bulan Ini");
                $sheet->setCellValue('L5', "Pertumbuhan");
                $sheet->setCellValue('M3', "Persentase Pencapaian");
                $sheet->setCellValue('M4', "Desember Tahun Lalu");
                $sheet->setCellValue('N4', "Bulan Lalu");
                $sheet->setCellValue('O4', "Bulan Ini");
                $sheet->setCellValue('P4', "Pertumbuhan %");
                $sheet->setCellValue('P5', "Komulatif s.d. Bulan Ini");
                $sheet->setCellValue('Q5', "Bulan Ini");
                $sheet->setCellValue('R3', "Catatan");
                $sheet->setCellValue('A52', "Pencapaian");
                $sheet->setCellValue('A55', "KATEGORI KEPATUHAN BERSAMA");


                $styleArray = [
                    'font' => [
                        'bold' => true, // Make font bold
                    ],
                    'alignment' => [
                        'horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER,
                        'vertical' => \PhpOffice\PhpSpreadsheet\Style\Alignment::VERTICAL_CENTER,
                    ],
                ];

                $styleArrayBold = [
                    'font' => [
                        'bold' => true, // Make font bold
                    ],
                ];

                $styleArray2 = [
                    'alignment' => [
                        'wrapText' => TRUE,
                        'vertical' => \PhpOffice\PhpSpreadsheet\Style\Alignment::VERTICAL_CENTER,
                        'width' => 20
                    ],
                ];

                $styleArray3 = [
                    'alignment' => [
                        'vertical' => \PhpOffice\PhpSpreadsheet\Style\Alignment::VERTICAL_TOP,
                    ],
                ];

                //tengah
                $event->sheet->getDelegate()->getStyle('A3:R5')->applyFromArray($styleArray);

                //Auto size kolom
                $event->sheet->getDelegate()->getColumnDimension('A')->setAutoSize(true);
                $event->sheet->getDelegate()->getColumnDimension('B')->setAutoSize(true);
                $event->sheet->getDelegate()->getColumnDimension('C')->setAutoSize(true);
                $event->sheet->getDelegate()->getColumnDimension('D')->setAutosize(true);
                $event->sheet->getDelegate()->getColumnDimension('E')->setAutosize(true);
                $event->sheet->getDelegate()->getColumnDimension('F')->setAutoSize(true);
                $event->sheet->getDelegate()->getColumnDimension('H')->setAutoSize(true);
                $event->sheet->getDelegate()->getColumnDimension('J')->setAutoSize(true);
                $event->sheet->getDelegate()->getColumnDimension('K')->setAutoSize(true);
                $event->sheet->getDelegate()->getColumnDimension('L')->setAutoSize(true);
                $event->sheet->getDelegate()->getColumnDimension('R')->setAutoSize(true);
                $event->sheet->getDelegate()->getColumnDimension('I')->setWidth(25);
                $event->sheet->getDelegate()->getColumnDimension('M')->setWidth(10);
                $event->sheet->getDelegate()->getColumnDimension('N')->setWidth(10);
                $event->sheet->getDelegate()->getColumnDimension('O')->setWidth(10);
                $event->sheet->getDelegate()->getColumnDimension('P')->setWidth(10);
                $event->sheet->getDelegate()->getColumnDimension('Q')->setWidth(10);

                //textwrap allowed
                $event->sheet->getDelegate()->getStyle('I1:I3')->applyFromArray($styleArray2);
                $event->sheet->getDelegate()->getStyle('M4:M5')->applyFromArray($styleArray2);
                $event->sheet->getDelegate()->getStyle('N4:N5')->applyFromArray($styleArray2);
                $event->sheet->getDelegate()->getStyle('O4:O5')->applyFromArray($styleArray2);
                $event->sheet->getDelegate()->getStyle('P5:P5')->applyFromArray($styleArray2);
                $event->sheet->getDelegate()->getStyle('Q5:Q5')->applyFromArray($styleArray2);
                $event->sheet->getDelegate()->getStyle('A52:R52')->applyFromArray($styleArrayBold);
                $event->sheet->getDelegate()->getStyle('A1:A2')->applyFromArray($styleArrayBold);
                $event->sheet->getDelegate()->getStyle('A55:I55')->applyFromArray($styleArrayBold);

                $event->sheet->getDelegate()->getStyle('A55:I55')->applyFromArray([
                    'fill' => [
                        'fillType' => \PhpOffice\PhpSpreadsheet\Style\Fill::FILL_SOLID,
                        'color' => ['argb' => 'de73ff']
                    ],
                    'alignment' => [
                        'horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER,
                    ],
                ]);

                $event->sheet->getStyle('A3:R52')->applyFromArray([
                    'borders' => [
                        'allBorders' => [
                            'borderStyle' => \PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THIN,
                            'color' => ['argb' => '000000'],
                        ],
                    ],
                ]);

                $event->sheet->getStyle('A55:I55')->applyFromArray([
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

    public function columnFormats(): array
    {
        return [
            'G' => \PhpOffice\PhpSpreadsheet\Style\NumberFormat::FORMAT_PERCENTAGE_00,
            'H' => \PhpOffice\PhpSpreadsheet\Style\NumberFormat::FORMAT_PERCENTAGE_00,
            'M' => \PhpOffice\PhpSpreadsheet\Style\NumberFormat::FORMAT_PERCENTAGE_00,
            'N' => \PhpOffice\PhpSpreadsheet\Style\NumberFormat::FORMAT_PERCENTAGE_00,
            'M' => \PhpOffice\PhpSpreadsheet\Style\NumberFormat::FORMAT_PERCENTAGE_00,
            'O' => \PhpOffice\PhpSpreadsheet\Style\NumberFormat::FORMAT_PERCENTAGE_00,
            'P' => \PhpOffice\PhpSpreadsheet\Style\NumberFormat::FORMAT_PERCENTAGE_00,
            'Q' => \PhpOffice\PhpSpreadsheet\Style\NumberFormat::FORMAT_PERCENTAGE_00,
        ];
    }

    public function array(): array
    {
        try {
            $year = $this->tahun;
            $month = $this->bulan;
            $lastMonth = null;

            if ($month == 1) {
                $lastMonth = 12;
            } else {
                $lastMonth = $month - 1;
            }


            $lastDayOfLM = Carbon::create($year, $lastMonth)->endOfMonth()->day;
            $lastDayOfTM = Carbon::create($year, $month)->endOfMonth()->day;


            $dString = $year . '-' . $month . '-' . $lastDayOfTM; //string untuk diconvert jadi tanggal sesuai request dari front end
            $dStringLM = $year . '-' . $lastMonth . '-' . $lastDayOfLM; //string untuk diconvert jadi tanggal Bulan Lalu
            $dStringLY = $year . '-01-01'; //string untuk diconvert jadi tanggal awal tahun lalu
            $date = Carbon::createFromFormat('Y-m-d', $dString); //convert ke date
            $dateLY = Carbon::createFromFormat('Y-m-d', $dStringLY); //convert ke date
            $dateLM = Carbon::createFromFormat('Y-m-d', $dStringLM); //convert ke date

            //Mengambil data monitoring dan monitoring rekom
            $table_data = Cu::with('hasMonitoring', 'hasMonitoring.monitoring_rekom')->whereNull('deleted_at')->get();


            //menghitung dan memasukkan data yang akan ditampilkan  pada tabel per cu
            $table_data->each(function ($cu) use ($date, $dateLY, $dateLM) {
                $cu->hasMonitoring->each(function ($monitoring) use ($date, $dateLM, $dateLY) {


                    //jumlah rekom per periode yg dipilih created nya <= periode yg dipilih
                    $filteredRekom = $monitoring->monitoring_rekom->filter(function ($rekom) use ($date) {
                        return $rekom->created_at <= $date;
                    });

                    //jumlah rekom ok per periode yg dipilih updated nya <= periode yg dipilih
                    $filteredRekomOk = $monitoring->monitoring_rekom->filter(function ($rekom) use ($date) {
                        return $rekom->updated_at <= $date && $rekom->status == 1;
                    });

                    //jumlah rekomendasi per desember tahun lalu created nya <= tahun lalu -12-31
                    $filteredRekomLastYear = $monitoring->monitoring_rekom->filter(function ($rekom) use ($dateLY) {
                        return $rekom->created_at <= $dateLY;
                    });

                    //jumlah rekom ok per desember tahun lalu updated nya <= tahun lalu -12-31
                    $filteredRekomOkLastYear = $monitoring->monitoring_rekom->filter(function ($rekom) use ($dateLY) {
                        return $rekom->updated_at <= $dateLY && $rekom->status == 1;
                    });

                    //jumlah rekom per bulan sebelumnya dari periode yg dipilih updated nya <= periode yg dipilih
                    $filteredRekomLastMonth = $monitoring->monitoring_rekom->filter(function ($rekom) use ($dateLM) {
                        return $rekom->created_at <= $dateLM;
                    });

                    $filteredRekomOkLastMonth = $monitoring->monitoring_rekom->filter(function ($rekom) use ($dateLM) {
                        return $rekom->updated_at <= $dateLM && $rekom->status == 1;
                    });

                    $monitoring->monitoring_rekom_count = $filteredRekom->count();
                    $monitoring->monitoring_rekom_ok_count = $filteredRekomOk->count();
                    $monitoring->monitoring_rekom_last_year_count = $filteredRekomLastYear->count();
                    $monitoring->monitoring_rekom_ok_last_year_count = $filteredRekomOkLastYear->count();
                    $monitoring->monitoring_rekom_last_month_count = $filteredRekomLastMonth->count();
                    $monitoring->monitoring_rekom_ok_last_month_count = $filteredRekomOkLastMonth->count();
                });
            });

            $sum_tercapai = 0;
            $sum_tidak_tercapai = 0;
            $sum_rekom = 0;
            $sum_persen_tercapai = 0;
            $sum_persen_tidak_tercapai = 0;
            $sum_des_tahun_lalu = 0;
            $sum_pertumbuhan = 0;

            $table_data->each(function ($cu) use (&$sum_tercapai, &$sum_tidak_tercapai, &$sum_rekom, &$sum_persen_tercapai, &$sum_persen_tidak_tercapai, &$sum_des_tahun_lalu, &$sum_bulan_ini, &$sum_pertumbuhan) {

                $cu->jumlah_rekomendasi = $cu->hasMonitoring->sum('monitoring_rekom_count');
                $cu->tercapai = $cu->hasMonitoring->sum('monitoring_rekom_ok_count');
                $cu->tidak_tercapai = $cu->jumlah_rekomendasi - $cu->tercapai;
                $cu->presentase_tercapai = $cu->jumlah_rekomendasi != 0 && $cu->tercapai != 0 ? round(($cu->tercapai / $cu->jumlah_rekomendasi) * 100, 2) : 0;
                $cu->presentase_tidak_tercapai = $cu->jumlah_rekomendasi != 0 && $cu->tidak_tercapai != 0 ? round(($cu->tidak_tercapai / $cu->jumlah_rekomendasi) * 100, 2) : 0;
                if ($cu->presentase_tercapai >= 0 && $cu->presentase_tercapai <= 20.99) {
                    $cu->kategori_kepatuhan = 'Sangat Tidak Tercapai';
                } elseif ($cu->presentase_tercapai >= 21 && $cu->presentase_tercapai <= 40.99) {
                    $cu->kategori_kepatuhan = 'Tidak Tercapai';
                } elseif ($cu->presentase_tercapai >= 41 && $cu->presentase_tercapai <= 60.99) {
                    $cu->kategori_kepatuhan = 'Cukup Tercapai';
                } elseif ($cu->presentase_tercapai >= 61 && $cu->presentase_tercapai <= 80.99) {
                    $cu->kategori_kepatuhan = 'Tercapai';
                } elseif ($cu->presentase_tercapai >= 81 && $cu->presentase_tercapai <= 100) {
                    $cu->kategori_kepatuhan = 'Sangat Tercapai';
                }
                $cu->rekom_des_tahun_lalu = $cu->hasMonitoring->sum('monitoring_rekom_last_year_count');
                $cu->rekom_bulan_ini = $cu->jumlah_rekomendasi;
                $cu->rekom_pertumbuhan = $cu->jumlah_rekomendasi != 0 ? $cu->jumlah_rekomendasi -  $cu->rekom_des_tahun_lalu : 0;
                $cu->presentase_rekom_ok_tahun_lalu = $cu->rekom_des_tahun_lalu != 0 && $cu->hasMonitoring->sum('monitoring_rekom_ok_last_year_count') != 0 ? round(($cu->hasMonitoring->sum('monitoring_rekom_ok_last_year_count') / $cu->rekom_des_tahun_lalu) * 100, 2) : 0;
                $cu->presentase_rekom_ok_bulan_lalu = $cu->hasMonitoring->sum('monitoring_rekom_last_month_count') != 0 && $cu->hasMonitoring->sum('monitoring_rekom_ok_last_month_count') != 0 ?
                    round(($cu->hasMonitoring->sum('monitoring_rekom_ok_last_month_count') / $cu->hasMonitoring->sum('monitoring_rekom_last_month_count')) * 100, 2) : 0;
                $cu->presentase_rekom_ok_bulan_ini = $cu->tercapai != 0 && $cu->jumlah_rekomendasi != 0 ?  round(($cu->tercapai / $cu->jumlah_rekomendasi) * 100, 2) : 0;
                $cu->pertumbuhan_kumulatif = $cu->presentase_rekom_ok_bulan_ini != 0 && $cu->presentase_rekom_ok_tahun_lalu != 0 ?  round(($cu->presentase_rekom_ok_bulan_ini - $cu->presentase_rekom_ok_tahun_lalu), 2) : 0;
                $cu->pertumbuhan_bulan_ini = $cu->presentase_rekom_ok_bulan_ini != 0 && $cu->presentase_rekom_ok_bulan_lalu != 0 ?  round(($cu->presentase_rekom_ok_bulan_ini - $cu->presentase_rekom_ok_bulan_lalu), 2) : 0;
                if ($cu->presentase_rekom_ok_bulan_ini - $cu->presentase_rekom_ok_bulan_lalu == 0) {
                    $cu->catatan = 'Tidak Ada Isi SIMO';
                } elseif ($cu->presentase_rekom_ok_bulan_ini - $cu->presentase_rekom_ok_bulan_lalu < 0) {
                    $cu->catatan = 'Penambahan Rekomendasi Audit';
                } elseif ($cu->presentase_rekom_ok_bulan_ini - $cu->presentase_rekom_ok_bulan_lalu > 0) {
                    $cu->catatan = 'Telah Melakukan Rekomendasi';
                }


                $sum_tercapai = $sum_tercapai + $cu->tercapai;
                $sum_tidak_tercapai = $sum_tidak_tercapai + $cu->tidak_tercapai;
                $sum_rekom = $sum_rekom + $cu->jumlah_rekomendasi;
                $sum_persen_tercapai = $sum_rekom != 0 && $sum_tercapai != 0 ?  round(($sum_tercapai / $sum_rekom) * 100, 2) : 0;
                $sum_persen_tidak_tercapai = $sum_rekom != 0 && $sum_tidak_tercapai != 0 ?  round(($sum_tidak_tercapai / $sum_rekom) * 100, 2) : 0;
                $sum_des_tahun_lalu = $sum_des_tahun_lalu + $cu->rekom_des_tahun_lalu;
                $sum_pertumbuhan = $sum_pertumbuhan + $cu->rekom_pertumbuhan;
            });



            $arrayComplete = [];
            $nomor = 1;
            foreach ($table_data as $data) {
                $arrayCell = [];
                //No
                array_push($arrayCell, $nomor);
                //CU
                array_push($arrayCell, $data->name);
                //BA
                array_push($arrayCell, $data->no_ba);
                //Jlh rekom
                array_push($arrayCell, $data->jumlah_rekomendasi);
                //Jlh Tercapai
                if ($data->tercapai > 0) {
                    array_push($arrayCell, $data->tercapai);
                } else {
                    array_push($arrayCell, '0');
                }
                // Jlh Tidak tercapai
                if ($data->tidak_tercapai > 0) {
                    array_push($arrayCell, $data->tidak_tercapai);
                } else {
                    array_push($arrayCell, '0');
                }
                //persen tercapai
                array_push($arrayCell, $data->presentase_tercapai/100);
                //persen tidak tercapai
                array_push($arrayCell, $data->presentase_tidak_tercapai/100);
                //kategori pencapaian
                array_push($arrayCell, $data->kategori_kepatuhan);
                // pertumbuhan rekom desember tahun lalu
                array_push($arrayCell, $data->rekom_des_tahun_lalu);
                //pertumbuhan rekom bulan ini
                array_push($arrayCell, $data->rekom_bulan_ini);
                //pertumbuhan rekom
                if ($data->rekom_pertumbuhan > 0) {
                    array_push($arrayCell, $data->rekom_pertumbuhan);
                } else {
                    array_push($arrayCell, '0');
                }
                //persentase pencapaian desember tahun lalu
                array_push($arrayCell, $data->presentase_rekom_ok_tahun_lalu/100);
                //persentase pencapaian bulan lalu
                array_push($arrayCell, $data->presentase_rekom_ok_bulan_lalu/100);
                //persentase pencapaian bulan ini
                array_push($arrayCell, $data->presentase_rekom_ok_bulan_ini/100);
                //persentase pertumbuhan komulatif s.d. bulan ini
                array_push($arrayCell, $data->pertumbuhan_kumulatif/100);
                //persentase pertumbuhan komulatif bulan ini
                array_push($arrayCell, $data->pertumbuhan_bulan_ini/100);
                //catatan
                array_push($arrayCell, $data->catatan);
                array_push($arrayComplete, $arrayCell);
                $nomor++;
            }

            $array_sum = [];
            $arry_blank = [];
            array_push($arry_blank, 0);
            //blank
            array_push($array_sum, 0);
            array_push($array_sum, 0);
            array_push($array_sum, 0);
            //sum rekom
            array_push($array_sum, $sum_rekom);
            //sum Tercapai
            array_push($array_sum, $sum_tercapai);
            //sum Tidak tercapai
            array_push($array_sum, $sum_tidak_tercapai);
            //sum persen tercapai
            array_push($array_sum, $sum_persen_tercapai/100);
            //sum persen tidak tercapai
            array_push($array_sum, $sum_persen_tidak_tercapai/100);
            //blank
            array_push($array_sum, 0);
            //sum pertumbuhan rekom desember tahun lalu
            array_push($array_sum, $sum_des_tahun_lalu);
            //sum pertumbuhan rekom bulan ini
            array_push($array_sum, $sum_rekom);
            //sum pertumbuhan rekom
            if ($sum_pertumbuhan > 0) {
                array_push($array_sum, $sum_pertumbuhan);
            } else {
                array_push($array_sum, '0');
            }

            //sum sum
            $array_sum_sum = [];
            //blank
            array_push($array_sum_sum, 0);
            array_push($array_sum_sum, 0);
            array_push($array_sum_sum, 0);
            array_push($array_sum_sum, 0);
            array_push($array_sum_sum, 0);
            array_push($array_sum_sum, 0);
            //sum persen tercapai
            array_push($array_sum_sum, $sum_persen_tercapai/100);
            //sum persen tidak tercapai
            array_push($array_sum_sum, $sum_persen_tidak_tercapai/100);
            //blank
            if ($sum_persen_tercapai  >= 0 && $sum_persen_tercapai <= 20.99) {
                array_push($array_sum_sum, 'Sangat Tidak Tercapai');
            } elseif ($sum_persen_tercapai  >= 21 && $sum_persen_tercapai <= 40.99) {
                array_push($array_sum_sum, 'Tidak Tercapai');
            } elseif ($sum_persen_tercapai  >= 41 && $sum_persen_tercapai  <= 60.99) {
                array_push($array_sum_sum, 'Cukup Tercapai');
            } elseif ($sum_persen_tercapai >= 61 && $sum_persen_tercapai  <= 80.99) {
                array_push($array_sum_sum, 'Tercapai');
            } elseif ($sum_persen_tercapai  >= 81 && $sum_persen_tercapai  <= 100) {
                array_push($array_sum_sum, 'Sangat Tercapai');
            }


            array_push($arrayComplete, $array_sum);
            array_push($arrayComplete, $arry_blank);
            array_push($arrayComplete, $arry_blank);
            array_push($arrayComplete, $array_sum_sum);

            return $arrayComplete;
        } catch (\Throwable $th) {
            //throw $th;
            return $array = [];
        }
    }


    public function title(): string
    {
        return 'Laporan Monitoring Konsolidasi';
    }
}
