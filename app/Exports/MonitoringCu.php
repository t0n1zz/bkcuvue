<?php

namespace App\Exports;

use App\MonitoringCu as AppMonitoringCu;
use Carbon\Carbon;
use Maatwebsite\Excel\Concerns\FromArray;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithCustomStartCell;
use Maatwebsite\Excel\Events\AfterSheet;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Concerns\WithTitle;
use \Maatwebsite\Excel\Sheet;

class MonitoringCu implements FromArray, WithHeadings, WithCustomStartCell, WithEvents, WithTitle
{

    protected $id_cu,$id_tp,$tgl_mulai,$tgl_akhir,$semua,$count_temuan,$summary,$row_sum,$row_kesimpulan,$row_kesimpulan1,$row_kesimpulan2,$row_kesimpulan3,$row_kesimpulan4,$row_kesimpulan5,$row_kesimpulan6;

    function __construct($id_cu, $id_tp,$tgl_mulai,$tgl_akhir,$semua,$count_temuan,$summary)
    {
        $this->id_cu = $id_cu;
        $this->id_tp = $id_tp;
        $this->tgl_mulai = $tgl_mulai;
        $this->tgl_akhir = $tgl_akhir;
        $this->semua = $semua;
        $this->count_temuan = $count_temuan;
        $this->summary = $summary;
        $this->row_sum = $this->count_temuan + 4;
        $this->row_kesimpulan = $this->count_temuan + 6;
        $this->row_kesimpulan1 = $this->count_temuan + 7;
        $this->row_kesimpulan2 = $this->count_temuan + 8;
        $this->row_kesimpulan3 = $this->count_temuan + 9;
        $this->row_kesimpulan4 = $this->count_temuan + 10;
        $this->row_kesimpulan5 = $this->count_temuan + 11;
        $this->row_kesimpulan6 = $this->count_temuan + 12;
    }

    public function startCell(): string
    {
        return 'A3';
    }

    public function registerEvents(): array
    {

        
        return [
            AfterSheet::class => function (AfterSheet $event) {
                /** @var Sheet $sheet */
                $sheet = $event->sheet;

                $sheet->mergeCells('A'.$this->row_kesimpulan.':D'.$this->row_kesimpulan);
                $sheet->mergeCells('A'.$this->row_kesimpulan1.':C'.$this->row_kesimpulan1);
                $sheet->mergeCells('A'.$this->row_kesimpulan2.':C'.$this->row_kesimpulan2);
                $sheet->mergeCells('A'.$this->row_kesimpulan3.':C'.$this->row_kesimpulan3);
                $sheet->mergeCells('A'.$this->row_kesimpulan4.':C'.$this->row_kesimpulan4);
                $sheet->mergeCells('A'.$this->row_kesimpulan5.':C'.$this->row_kesimpulan5);
                $sheet->mergeCells('A'.$this->row_kesimpulan6.':C'.$this->row_kesimpulan6);

                $sheet->mergeCells('A1:D1');

                $sheet->setCellValue('A2', "Jlh. Rekomendasi");

                $sheet->setCellValue('B2', "Jlh. Tercapai");

                $sheet->setCellValue('C2', "Jlh. Keputusan");

                $sheet->setCellValue('D2', "Temuan");

                $sheet->setCellValue('E2', "Rekomendasi");

                $sheet->setCellValue('F2', "Pencapaian");

                $sheet->setCellValue('G2', "Kendala");

                $sheet->setCellValue('H2', "Tindak Lanjut");

                $sheet->setCellValue('I2', "TP");

                $sheet->setCellValue('J2', "Jenis");

                $sheet->setCellValue('K2', "Aspek");

                $sheet->setCellValue('L2', "PIC CU");

                $sheet->setCellValue('M2', "PIC PUSKOPCUINA");

                $sheet->setCellValue('N2', "Tgl. Audit");

                $sheet->setCellValue('A'. $this->row_sum, $this->summary['sum_rekom']);

                $sheet->setCellValue('B'. $this->row_sum, $this->summary['sum_tercapai']);

                $sheet->setCellValue('C'. $this->row_sum, $this->summary['sum_pencapaian']);

                $sheet->setCellValue('A'. $this->row_kesimpulan, "Kesimpulan");
                $sheet->setCellValue('A'. $this->row_kesimpulan1, "Nilai Tercapai");
                $sheet->setCellValue('A'. $this->row_kesimpulan2, "Nilai Tidak Tercapai");
                $sheet->setCellValue('A'. $this->row_kesimpulan3, "Nilai Maksimum");
                $sheet->setCellValue('A'. $this->row_kesimpulan4, "Persentase Pencapaian");
                $sheet->setCellValue('A'. $this->row_kesimpulan5, "Persentase Tidak Tercapai");
                $sheet->setCellValue('A'. $this->row_kesimpulan6, "Penilain Akhir");

                $sheet->setCellValue('D'. $this->row_kesimpulan1, $this->summary['sum_tercapai']);
                $sheet->setCellValue('D'. $this->row_kesimpulan2, $this->summary['sum_tidak_tercapai']);
                $sheet->setCellValue('D'. $this->row_kesimpulan3, $this->summary['sum_rekom']);
                $sheet->setCellValue('D'. $this->row_kesimpulan4, $this->summary['sum_persen_tercapai'].'%');
                $sheet->setCellValue('D'. $this->row_kesimpulan5, $this->summary['sum_persen_tidak_tercapai'].'%');
                $sheet->setCellValue('D'. $this->row_kesimpulan6, $this->summary['kategori']);


                $styleArray = [
                    'alignment' => [
                        'horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER,
                        'vertical' => \PhpOffice\PhpSpreadsheet\Style\Alignment::VERTICAL_CENTER,
                    ],

                ];


                $styleArray2 = [
                    'alignment' => [
                        'wrapText' => TRUE,
                        'vertical' => \PhpOffice\PhpSpreadsheet\Style\Alignment::VERTICAL_TOP,
                        'width' => 20
                    ],
                ];

                $styleArray3 = [
                    'alignment' => [
                        'vertical' => \PhpOffice\PhpSpreadsheet\Style\Alignment::VERTICAL_TOP,
                    ],
                ];




                $event->sheet->getDelegate()->getStyle('A1:K1')->applyFromArray($styleArray);
                $event->sheet->getDelegate()->getStyle('A1:A1000')->applyFromArray($styleArray3);
                $event->sheet->getDelegate()->getColumnDimension('A')->setAutoSize(true);
                $event->sheet->getDelegate()->getStyle('B1:B1000')->applyFromArray($styleArray3);
                $event->sheet->getDelegate()->getColumnDimension('B')->setAutoSize(true);
                $event->sheet->getDelegate()->getStyle('C1:C1000')->applyFromArray($styleArray3);
                $event->sheet->getDelegate()->getColumnDimension('C')->setAutoSize(true);
                $event->sheet->getDelegate()->getStyle('D3:D1000')->applyFromArray($styleArray2);
                $event->sheet->getDelegate()->getColumnDimension('D')->setWidth(50);
                $event->sheet->getDelegate()->getStyle('E3:E1000')->applyFromArray($styleArray2);
                $event->sheet->getDelegate()->getColumnDimension('E')->setWidth(50);
                $event->sheet->getDelegate()->getStyle('F1:F1000')->applyFromArray($styleArray2);
                $event->sheet->getDelegate()->getColumnDimension('F')->setWidth(50);
                $event->sheet->getDelegate()->getStyle('G1:G1000')->applyFromArray($styleArray2);
                $event->sheet->getDelegate()->getColumnDimension('G')->setWidth(50);
                $event->sheet->getDelegate()->getStyle('H1:H1000')->applyFromArray($styleArray2);
                $event->sheet->getDelegate()->getColumnDimension('H')->setWidth(50);
                $event->sheet->getDelegate()->getStyle('I1:I1000')->applyFromArray($styleArray2);
                $event->sheet->getDelegate()->getColumnDimension('I')->setAutoSize(true);
                $event->sheet->getDelegate()->getStyle('J1:J1000')->applyFromArray($styleArray3);
                $event->sheet->getDelegate()->getColumnDimension('J')->setAutoSize(true);
                $event->sheet->getDelegate()->getStyle('K1:K1000')->applyFromArray($styleArray3);
                $event->sheet->getDelegate()->getColumnDimension('K')->setAutoSize(true);
                $event->sheet->getDelegate()->getStyle('L1:L1000')->applyFromArray($styleArray3);
                $event->sheet->getDelegate()->getColumnDimension('L')->setAutoSize(true);
                $event->sheet->getDelegate()->getStyle('M1:M1000')->applyFromArray($styleArray3);
                $event->sheet->getDelegate()->getColumnDimension('M')->setAutoSize(true);
                $event->sheet->getDelegate()->getStyle('N1:N1000')->applyFromArray($styleArray3);
                $event->sheet->getDelegate()->getColumnDimension('N')->setAutoSize(true);

                $jlh_row = $this->count_temuan + 2;
                $border = 'A2:N'.$jlh_row;
                $event->sheet->getDelegate()->getStyle('A1:N1')->applyFromArray(['fill' => [
                    'fillType' => \PhpOffice\PhpSpreadsheet\Style\Fill::FILL_SOLID,
                    'color' => ['argb' => 'ffff00']
                ]]);

                $event->sheet->getStyle($border)->applyFromArray([
                    'borders' => [
                        'allBorders' => [
                            'borderStyle' => \PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THIN,
                            'color' => ['argb' => '000000'],
                        ],
                    ],
                ]);

                $event->sheet->getStyle('A'.$this->row_sum.':C'.$this->row_sum)->applyFromArray([
                    'borders' => [
                        'allBorders' => [
                            'borderStyle' => \PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THIN,
                            'color' => ['argb' => '000000'],
                        ],
                    ],

                    'font' => [
                        'bold' => true, // Make font bold
                    ],

                    'fill' => [
                    'fillType' => \PhpOffice\PhpSpreadsheet\Style\Fill::FILL_SOLID,
                    'color' => ['argb' => '1fd655']
                ]
                ]);

                $event->sheet->getStyle('A'.$this->row_kesimpulan.':D'.$this->row_kesimpulan6)->applyFromArray([
                    'borders' => [
                        'allBorders' => [
                            'borderStyle' => \PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THIN,
                            'color' => ['argb' => '000000'],
                        ],
                    ],

                    'font' => [
                        'bold' => true, // Make font bold
                    ],

                    'alignment' => [
                        'horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_LEFT,
                    ],
                ]);

                $event->sheet->getStyle('A'.$this->row_kesimpulan)->applyFromArray([
                    'alignment' => [
                        'horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER,
                    ],
                    'fill' => [
                        'fillType' => \PhpOffice\PhpSpreadsheet\Style\Fill::FILL_SOLID,
                        'color' => ['argb' => 'af7dbc']
                    ],
                    
                ]);

                $event->sheet->getStyle('D'.$this->row_kesimpulan6)->applyFromArray([
                    'fill' => [
                        'fillType' => \PhpOffice\PhpSpreadsheet\Style\Fill::FILL_SOLID,
                        'color' => ['argb' => 'ffdbe9']
                    ],
                    
                ]);

                $event->sheet->getStyle('A'.$this->row_kesimpulan6)->applyFromArray([
                    'fill' => [
                        'fillType' => \PhpOffice\PhpSpreadsheet\Style\Fill::FILL_SOLID,
                        'color' => ['argb' => 'cbfef9']
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
        try {
            //code...
            $model = null;
            $start = Carbon::createFromFormat('Y-m-d', $this->tgl_mulai);
            $end = Carbon::createFromFormat('Y-m-d', $this->tgl_akhir);

            if($this->id_tp !='semua'){
                if($this->semua == true){
                    $model = AppMonitoringCu::with('cu', 'tp', 'aktivis_pic', 'aktivis_pemeriksa', 'monitoring_rekom', 'monitoring_pencapaian','monitoring_rekom_ok')->where('id_cu', $this->id_cu)->where('id_tp',$this->id_tp)->orderBy('aspek', 'desc')->get()->toArray();
                }else{
                    $model = AppMonitoringCu::with('cu', 'tp', 'aktivis_pic', 'aktivis_pemeriksa', 'monitoring_rekom', 'monitoring_pencapaian','monitoring_rekom_ok')->where('id_cu', $this->id_cu)->where('id_tp',$this->id_tp)->whereBetween('tanggal', [$start, $end])->orderBy('aspek', 'desc')->get()->toArray();
                }
            }else{
                if($this->semua == true){
                    $model = AppMonitoringCu::with('cu', 'tp', 'aktivis_pic', 'aktivis_pemeriksa', 'monitoring_rekom', 'monitoring_pencapaian','monitoring_rekom_ok')->where('id_cu', $this->id_cu)->orderBy('aspek', 'desc')->get()->toArray();
                }else{
                    $model = AppMonitoringCu::with('cu', 'tp', 'aktivis_pic', 'aktivis_pemeriksa', 'monitoring_rekom', 'monitoring_pencapaian','monitoring_rekom_ok')->where('id_cu', $this->id_cu)->whereBetween('tanggal', [$start, $end])->orderBy('aspek', 'desc')->get()->toArray();
                }
            }
        
            // dd($model[0]['monitoring_pencapaian']);
            $arrayComplete = [];
            foreach ($model as $monitoring) {

                $count = 0;
                $arrayNew = [];
                $arrayRekom = [];
                $arrayPencapaian =[];
                $arrayKendala = [];
                $arrayTindak = [];

                foreach ($monitoring['monitoring_rekom'] as $rekom) {
                    array_push($arrayRekom, $rekom['rekomendasi']);
                }

                foreach ($monitoring['monitoring_pencapaian'] as $pencapaian) {

                    array_push($arrayPencapaian, $pencapaian['pencapaian']);
                    if(isset($pencapaian['kendala'])){
                        array_push($arrayKendala,$pencapaian['kendala']);
                    }

                    if(isset($pencapaian['tindak'])){
                        array_push($arrayTindak,$pencapaian['tindak']);
                    }

                }
    
                if(isset($monitoring['monitoring_rekom'])){
                    array_push($arrayNew, count($monitoring['monitoring_rekom']));
                }else{
                    array_push($arrayNew, '0');
                }
    
                if(isset($monitoring['monitoring_rekom_ok'])){
                    array_push($arrayNew, count($monitoring['monitoring_rekom_ok']));
                }else{
                    array_push($arrayNew, '0');
                }
    
                if(isset($monitoring['monitoring_pencapaian'])){
                    array_push($arrayNew, count($monitoring['monitoring_pencapaian']));
                }else{
                    array_push($arrayNew, '0');
                }
    
                if(isset($monitoring['name'])){
                    array_push($arrayNew, $monitoring['name']);
                }else{
                    array_push($arrayNew, '0');
                }

                if(isset($arrayRekom)){
                    array_push($arrayNew, implode("\n", $arrayRekom));
                }else{
                    array_push($arrayNew, '-');
                }

                if(isset($arrayPencapaian)){
                    array_push($arrayNew, implode("\n", $arrayPencapaian));
                }else{
                    array_push($arrayNew, '-');
                }

                if(isset($arrayKendala)){
                    array_push($arrayNew, implode("\n", $arrayKendala));
                }else{
                    array_push($arrayNew, '-');
                }

                if(isset($arrayTindak)){
                    array_push($arrayNew, implode("\n", $arrayTindak));
                }else{
                    array_push($arrayNew, '-');
                }
               
                if(isset($monitoring['tp']['name'])){
                    array_push($arrayNew, $monitoring['tp']['name']);
                }else{
                    array_push($arrayNew, '-');
                }
                array_push($arrayNew, $monitoring['jenis']);
                array_push($arrayNew, $monitoring['perspektif']);
                if(isset($monitoring['aktivis_pic']['name'])){
                    array_push($arrayNew, $monitoring['aktivis_pic']['name']);
                }else{
                    array_push($arrayNew, '-');
                }
                array_push($arrayNew, $monitoring['aktivis_pemeriksa']['name']);
                array_push($arrayNew, Carbon::parse($monitoring['tanggal'])->format('d-m-Y'));
                array_push($arrayComplete, $arrayNew);
    
                $count++;
            }
    
            return $arrayComplete;
        } catch (\Throwable $th) {
            //throw $th;
        }
       
    }


    public function title(): string
    {
        return 'Laporan Monitoring CU';
    }
}