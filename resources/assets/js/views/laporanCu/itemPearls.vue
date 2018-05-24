<template>
	<div>

		<!-- p1 -->
		<div v-if="type == 'p1'">
			<div class="media-left media-middle">
				<a class="btn btn-rounded btn-icon btn-xs" :class="{'btn-primary': props.p1 >= 1, 'btn-danger': props.p1 < 1}">
					<span class="letter-icon">P1</span>
				</a>
			</div>
			<div class="media-body">
				<span class="display-inline-block text-default text-semibold letter-icon-title">
					<check-value :value="props.p1" valueType="percentage"></check-value>
				</span>
				<div class="text-muted text-size-small">
					<span class="status-mark position-left" :class="{'border-blue': props.p1 >= 1, 'border-red': props.p1 < 1}"></span>
					<span v-if="props.p1 >= 1">IDEAL</span>
					<span v-else>TIDAK IDEAL</span>
				</div>
			</div>
		</div>

		<!-- p2 -->
		<div v-else-if="type == 'p2'">
			<div class="media-left media-middle">
				<a class="btn btn-rounded btn-icon btn-xs" :class="{'btn-primary': props.p2 > 0.35, 'btn-danger': props.p2 <= 0.35}">
					<span class="letter-icon">P2</span>
				</a>
			</div>
			<div class="media-body">
				<span class="display-inline-block text-default text-semibold letter-icon-title">
					<check-value :value="props.p2" valueType="percentage"></check-value>
				</span>
				<div class="text-muted text-size-small">
					<span class="status-mark position-left" :class="{'border-blue': props.p2 > 0.35, 'border-red': props.p2 <= 0.35}"></span>
					<span v-if="props.p2 > 0.35">IDEAL</span>
					<span v-else>TIDAK IDEAL</span>
				</div>
			</div>
		</div>

		<!-- e1 -->
		<div v-else-if="type == 'e1'">
			<div class="media-left media-middle">
				<a class="btn btn-rounded btn-icon btn-xs" :class="{'btn-primary': props.e1 >= 0.7 && props.e1 <= 0.8, 'btn-danger': props.e1 < 0.7 || props.e1 > 0.8}">
					<span class="letter-icon">E1</span>
				</a>
			</div>
			<div class="media-body">
				<span class="display-inline-block text-default text-semibold letter-icon-title">
					<check-value :value="props.e1" valueType="percentage"></check-value>
				</span>
				<div class="text-muted text-size-small">
					<span class="status-mark border-blue position-left" :class="{'border-blue': props.e1 >= 0.7 && props.e1 <= 0.8, 'border-red': props.e1 < 0.7 || props.e1 > 0.8,}"></span>
					<span v-if="props.e1 >= 0.7 && props.e1 <= 0.8">IDEAL</span>
					<span v-else>TIDAK IDEAL</span>
				</div>
			</div>
		</div>

		<!-- e5 -->
		<div v-else-if="type == 'e5'">
			<div class="media-left media-middle">
				<a class="btn btn-rounded btn-icon btn-xs" :class="{'btn-primary': props.e5 >= 0.7 && props.e5 <= 0.8, 'btn-danger': props.e5 < 0.7 || props.e5 > 0.8}">
					<span class="letter-icon">E5</span>
				</a>
			</div>
			<div class="media-body">
				<span class="display-inline-block text-default text-semibold letter-icon-title">
					<check-value :value="props.e5" valueType="percentage"></check-value>
				</span>
				<div class="text-muted text-size-small">
					<span class="status-mark position-left" :class="{'border-blue': props.e5 >= 0.7 && props.e5 <= 0.8, 'border-red': props.e5 < 0.7 || props.e5 > 0.8,}"></span>
					<span v-if="props.e5 >= 0.7 && props.e5 <= 0.8">IDEAL</span>
					<span v-else>TIDAK IDEAL</span>
				</div>
			</div>
		</div>

		<!-- e6 -->
		<div v-else-if="type == 'e6'">
			<div class="media-left media-middle">
				<a class="btn btn-rounded btn-icon btn-xs" :class="{'btn-primary': props.e6 <= 0.05, 'btn-danger': props.e6 > 0.05}">
					<span class="letter-icon">E6</span>
				</a>
			</div>
			<div class="media-body">
				<span class="display-inline-block text-default text-semibold letter-icon-title">
					<check-value :value="props.e6" valueType="percentage"></check-value>
				</span>
				<div class="text-muted text-size-small">
					<span class="status-mark position-left" :class="{'border-blue': props.e6 <= 0.05, 'border-red': props.e6 > 0.05}"></span>
					<span v-if="props.e6 <= 0.05">IDEAL</span>
					<span v-else>TIDAK IDEAL</span>
				</div>
			</div>
		</div>

		<!-- e9 -->
		<div v-else-if="type == 'e9'">
			<div class="media-left media-middle">
				<a class="btn btn-rounded btn-icon btn-xs" :class="{'btn-primary': props.e9 >= 0.1, 'btn-danger': props.e9 < 0.1}">
					<span class="letter-icon">E9</span>
				</a>
			</div>
			<div class="media-body">
				<span class="display-inline-block text-default text-semibold letter-icon-title">
					<check-value :value="props.e9" valueType="percentage"></check-value>
				</span>
				<div class="text-muted text-size-small">
					<span class="status-mark position-left" :class="{'border-blue': props.e9 >= 0.1, 'border-red': props.e9 < 0.1}"></span>
					<span v-if="props.e9 >= 0.1">IDEAL</span>
					<span v-else>TIDAK IDEAL</span>
				</div>
			</div>
		</div>

		<!-- a1 -->
		<div v-else-if="type == 'a1'">
			<div class="media-left media-middle">
				<a class="btn btn-rounded btn-icon btn-xs" :class="{'btn-primary': props.a1 <= 0.05, 'btn-danger': props.a1 > 0.05}">
					<span class="letter-icon">A1</span>
				</a>
			</div>
			<div class="media-body">
				<span class="display-inline-block text-default text-semibold letter-icon-title">
					<check-value :value="props.a1" valueType="percentage"></check-value>
				</span>
				<div class="text-muted text-size-small">
					<span class="status-mark position-left" :class="{'border-blue': props.a1 <= 0.05, 'border-red': props.a1 > 0.05}"></span>
					<span v-if="props.a1 <= 0.05">IDEAL</span>
					<span v-else>TIDAK IDEAL</span>
				</div>
			</div>
		</div>

		<!-- a2 -->
		<div v-else-if="type == 'a2'">
			<div class="media-left media-middle">
				<a class="btn btn-rounded btn-icon btn-xs" :class="{'btn-primary': props.a2 < 0.05, 'btn-danger': props.a2 >= 0.05}">
					<span class="letter-icon">A2</span>
				</a>
			</div>
			<div class="media-body">
				<span class="display-inline-block text-default text-semibold letter-icon-title">
					<check-value :value="props.a2" valueType="percentage"></check-value>
				</span>
				<div class="text-muted text-size-small">
					<span class="status-mark position-left" :class="{'border-blue': props.a2 < 0.05, 'border-red': props.a2 > 0.05}"></span>
					<span v-if="props.a2 < 0.05">IDEAL</span>
					<span v-else>TIDAK IDEAL</span>
				</div>
			</div>
		</div>

		<!-- r7 -->
		<div v-else-if="type == 'r7'">
			<div v-if="props.simpanan_saham_des != 0 && props.simpanan_saham_lalu != 0">
				
				<!-- r7_1 -->
				<div class="media-left media-middle">
					<a class="btn btn-rounded btn-icon btn-xs" :class="{'btn-primary': props.r7_1 == props.harga_pasar, 'btn-danger': props.r7_1 != props.harga_pasar}">
						<span class="letter-icon">R7</span>
					</a>
				</div>
				<div class="media-body pr-10">
					<span class="display-inline-block text-default text-semibold letter-icon-title">
						<check-value :value="props.r7_1" valueType="percentage"></check-value>
					</span>
					<div class="text-muted text-size-small">
						<span class="status-mark position-left" :class="{'border-blue': props.r7_1 == props.harga_pasar , 'border-red': props.r7_1 != props.harga_pasar}"></span>
						<span v-if="props.r7_1 == props.harga_pasar">IDEAL</span>
						<span v-else>TIDAK IDEAL</span>
					</div>
				</div>

				<!-- r7_2 -->
				<div class="media-left media-middle">
					<a class="btn btn-rounded btn-icon btn-xs" :class="{'btn-primary': props.r7_2 == props.harga_pasar, 'btn-danger': props.r7_2 != props.harga_pasar}">
						<span class="letter-icon">R7</span>
					</a>
				</div>
				<div class="media-body">
					<span class="display-inline-block text-default text-semibold letter-icon-title">
						<check-value :value="props.r7_2" valueType="percentage"></check-value>
					</span>
					<div class="text-muted text-size-small">
						<span class="status-mark position-left" :class="{'border-blue': props.r7_2 == props.harga_pasar , 'border-red': props.r7_2 != props.harga_pasar}"></span>
						<span v-if="props.r7_2 == props.harga_pasar">IDEAL</span>
						<span v-else>TIDAK IDEAL</span>
					</div>
				</div>
			</div>
			<div v-else>
				<div class="media-left media-middle">
					<a class="btn btn-rounded btn-icon btn-xs" :class="{'btn-primary': props.r7_1 == props.harga_pasar, 'btn-danger': props.r7_1 != props.harga_pasar}">
						<span class="letter-icon">R7</span>
					</a>
				</div>
				<div class="media-body">
					<span class="display-inline-block text-default text-semibold letter-icon-title">
						<check-value :value="props.r7_1" valueType="percentage"></check-value>
					</span>
					<div class="text-muted text-size-small">
						<span class="status-mark position-left" :class="{'border-blue': props.r7_1 == props.harga_pasar , 'border-red': props.r7_1 != props.harga_pasar}"></span>
						<span v-if="props.r7_1 == props.harga_pasar">IDEAL</span>
						<span v-else>TIDAK IDEAL</span>
					</div>
				</div>
			</div>
			
		</div>

		<!-- r9 -->
		<div v-else-if="type == 'r9'">
			<div class="media-left media-middle">
				<a class="btn btn-rounded btn-icon btn-xs" :class="{'btn-primary': props.r9 == 0.05, 'btn-danger': props.r9 < 0.05, 'btn-danger': props.r9 < 0.05}">
					<span class="letter-icon">R9</span>
				</a>
			</div>
			<div class="media-body">
				<span class="display-inline-block text-default text-semibold letter-icon-title">
					<check-value :value="props.r9" valueType="percentage"></check-value>
				</span>
				<div class="text-muted text-size-small">
					<span class="status-mark position-left" :class="{'border-blue': props.r9 == 0.05, 'border-red': props.r9 < 0.05,'border-red': props.r9 > 0.05}"></span>
					<span v-if="props.r9 == 0.05">IDEAL</span>
					<span v-else>TIDAK IDEAL</span>
				</div>
			</div>
		</div>

		<!-- l1 -->
		<div v-else-if="type == 'l1'">
			<div class="media-left media-middle">
				<a class="btn btn-rounded btn-icon btn-xs" :class="{'btn-primary': props.l1 >= 0.15 && props.l1 <= 0.2, 'btn-danger': props.l1 < 0.15 || props.l1 > 0.2}">
					<span class="letter-icon">L1</span>
				</a>
			</div>
			<div class="media-body">
				<span class="display-inline-block text-default text-semibold letter-icon-title">
					<check-value :value="props.l1" valueType="percentage"></check-value>
				</span>
				<div class="text-muted text-size-small">
					<span class="status-mark position-left" :class="{'border-blue': props.l1 >= 0.15 && props.l1 <= 0.2, 'border-red': props.l1 < 0.15 || props.l1 > 0.2,}"></span>
					<span v-if="props.l1 >= 0.15 && props.l1 <= 0.2">IDEAL</span>
					<span v-else>TIDAK IDEAL</span>
				</div>
			</div>
		</div>

		<!-- s10 -->
		<div v-else-if="type == 's10'">
			<div class="media-left media-middle">
				<a class="btn btn-rounded btn-icon btn-xs" :class="{'btn-primary': props.s10 > 0.12, 'btn-danger': props.s10 <= 0.12}">
					<span class="letter-icon">S10</span>
				</a>
			</div>
			<div class="media-body">
				<span class="display-inline-block text-default text-semibold letter-icon-title">
					<check-value :value="props.s10" valueType="percentage"></check-value>
				</span>
				<div class="text-muted text-size-small">
					<span class="status-mark position-left" :class="{'border-blue': props.s10 > 0.12, 'border-red': props.s10 <= 0.12}"></span>
					<span v-if="props.s10 > 0.12">IDEAL</span>
					<span v-else>TIDAK IDEAL</span>
				</div>
			</div>
		</div>

		<!-- s11 -->
		<div v-else-if="type == 's11'">
			<div class="media-left media-middle">
				<a class="btn btn-rounded btn-icon btn-xs" :class="{'btn-primary': props.s11 > (0.1 + props.laju_inflasi), 'btn-danger': props.s11 <= (0.1 + props.laju_inflasi)}">
					<span class="letter-icon">S11</span>
				</a>
			</div>
			<div class="media-body">
				<span class="display-inline-block text-default text-semibold letter-icon-title">
					<check-value :value="props.s11" valueType="percentage"></check-value>
				</span>
				<div class="text-muted text-size-small">
					<span class="status-mark position-left" :class="{'border-blue': props.s11 > (0.1 + props.laju_inflasi), 'border-red': props.s11 <= (0.1 + props.laju_inflasi)}"></span>
					<span v-if="props.s11 > (0.1 + props.laju_inflasi)">IDEAL</span>
					<span v-else>TIDAK IDEAL</span>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
	import checkValue from '../../components/checkValue.vue';

	export default {
		components: {
			checkValue,
		},
		props:['type','props'],
		data() {
			return {

			}
		}
	}
</script>