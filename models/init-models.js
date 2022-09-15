var DataTypes = require("sequelize").DataTypes;
var _SAP_EXZ892GSB0010 = require("./SAP_EXZ892GSB0010");
var _SAP_EXZ892GSB0020 = require("./SAP_EXZ892GSB0020");
var _acos = require("./acos");
var _alert_q_details = require("./alert_q_details");
var _alert_qs = require("./alert_qs");
var _areas = require("./areas");
var _aros = require("./aros");
var _aros_acos = require("./aros_acos");
var _broker_areas = require("./broker_areas");
var _broker_head = require("./broker_head");
var _brokers = require("./brokers");
var _cake_sessions = require("./cake_sessions");
var _car_deliveries = require("./car_deliveries");
var _car_delivery_details = require("./car_delivery_details");
var _car_plan = require("./car_plan");
var _checklist_crops = require("./checklist_crops");
var _checklists = require("./checklists");
var _chem_crops = require("./chem_crops");
var _chem_package = require("./chem_package");
var _chem_plan = require("./chem_plan");
var _chemicals = require("./chemicals");
var _cities = require("./cities");
var _crops = require("./crops");
var _drone_logs = require("./drone_logs");
var _farmer_audits = require("./farmer_audits");
var _farmer_cards = require("./farmer_cards");
var _farmer_images = require("./farmer_images");
var _farmer_saps = require("./farmer_saps");
var _farmers = require("./farmers");
var _formula_sets = require("./formula_sets");
var _gpx_files = require("./gpx_files");
var _groups = require("./groups");
var _grow_states = require("./grow_states");
var _harvest_locks = require("./harvest_locks");
var _harvest_move_q = require("./harvest_move_q");
var _harvest_plans = require("./harvest_plans");
var _harvest_types = require("./harvest_types");
var _heads = require("./heads");
var _import_qa_results = require("./import_qa_results");
var _import_qc_saps = require("./import_qc_saps");
var _import_weight_saps = require("./import_weight_saps");
var _input_items = require("./input_items");
var _insect_acts = require("./insect_acts");
var _land_cases = require("./land_cases");
var _land_names = require("./land_names");
var _lock_dates = require("./lock_dates");
var _lock_gpx = require("./lock_gpx");
var _map_matcode = require("./map_matcode");
var _mat_codes = require("./mat_codes");
var _plan_act_details = require("./plan_act_details");
var _plan_acts = require("./plan_acts");
var _plan_schedule_details = require("./plan_schedule_details");
var _plan_schedules = require("./plan_schedules");
var _planning_detail_date = require("./planning_detail_date");
var _planning_details = require("./planning_details");
var _plannings = require("./plannings");
var _plant_code = require("./plant_code");
var _prev_chem = require("./prev_chem");
var _process_codes = require("./process_codes");
var _provinces = require("./provinces");
var _qa_crop_mappings = require("./qa_crop_mappings");
var _qa_group_details = require("./qa_group_details");
var _qa_item_details = require("./qa_item_details");
var _qa_masters = require("./qa_masters");
var _qa_rate_chems = require("./qa_rate_chems");
var _qa_rate_sets = require("./qa_rate_sets");
var _qa_region_mapping = require("./qa_region_mapping");
var _qa_roles = require("./qa_roles");
var _qc_defects = require("./qc_defects");
var _qc_rate = require("./qc_rate");
var _qc_result_items = require("./qc_result_items");
var _qc_result_masters = require("./qc_result_masters");
var _qc_roles = require("./qc_roles");
var _receive_mat_details = require("./receive_mat_details");
var _receive_mat_groups = require("./receive_mat_groups");
var _receive_mat_units = require("./receive_mat_units");
var _receive_mats = require("./receive_mats");
var _sample_plans = require("./sample_plans");
var _schedule_roles = require("./schedule_roles");
var _schedule_rules = require("./schedule_rules");
var _seed_codes = require("./seed_codes");
var _seed_packs = require("./seed_packs");
var _sowing_details = require("./sowing_details");
var _sowing_logs = require("./sowing_logs");
var _sowing_shows = require("./sowing_shows");
var _sowings = require("./sowings");
var _standard_code = require("./standard_code");
var _sub_input_items = require("./sub_input_items");
var _syncTbDailyTruck = require("./syncTbDailyTruck");
var _tmp_schedule_plan_details = require("./tmp_schedule_plan_details");
var _tmp_schedule_plans = require("./tmp_schedule_plans");
var _tmp_schedules = require("./tmp_schedules");
var _units = require("./units");
var _user_acts = require("./user_acts");
var _user_farmer = require("./user_farmer");
var _users = require("./users");
var _yeilds = require("./yeilds");

function initModels(sequelize) {
  var SAP_EXZ892GSB0010 = _SAP_EXZ892GSB0010(sequelize, DataTypes);
  var SAP_EXZ892GSB0020 = _SAP_EXZ892GSB0020(sequelize, DataTypes);
  var acos = _acos(sequelize, DataTypes);
  var alert_q_details = _alert_q_details(sequelize, DataTypes);
  var alert_qs = _alert_qs(sequelize, DataTypes);
  var areas = _areas(sequelize, DataTypes);
  var aros = _aros(sequelize, DataTypes);
  var aros_acos = _aros_acos(sequelize, DataTypes);
  var broker_areas = _broker_areas(sequelize, DataTypes);
  var broker_head = _broker_head(sequelize, DataTypes);
  var brokers = _brokers(sequelize, DataTypes);
  var cake_sessions = _cake_sessions(sequelize, DataTypes);
  var car_deliveries = _car_deliveries(sequelize, DataTypes);
  var car_delivery_details = _car_delivery_details(sequelize, DataTypes);
  var car_plan = _car_plan(sequelize, DataTypes);
  var checklist_crops = _checklist_crops(sequelize, DataTypes);
  var checklists = _checklists(sequelize, DataTypes);
  var chem_crops = _chem_crops(sequelize, DataTypes);
  var chem_package = _chem_package(sequelize, DataTypes);
  var chem_plan = _chem_plan(sequelize, DataTypes);
  var chemicals = _chemicals(sequelize, DataTypes);
  var cities = _cities(sequelize, DataTypes);
  var crops = _crops(sequelize, DataTypes);
  var drone_logs = _drone_logs(sequelize, DataTypes);
  var farmer_audits = _farmer_audits(sequelize, DataTypes);
  var farmer_cards = _farmer_cards(sequelize, DataTypes);
  var farmer_images = _farmer_images(sequelize, DataTypes);
  var farmer_saps = _farmer_saps(sequelize, DataTypes);
  var farmers = _farmers(sequelize, DataTypes);
  var formula_sets = _formula_sets(sequelize, DataTypes);
  var gpx_files = _gpx_files(sequelize, DataTypes);
  var groups = _groups(sequelize, DataTypes);
  var grow_states = _grow_states(sequelize, DataTypes);
  var harvest_locks = _harvest_locks(sequelize, DataTypes);
  var harvest_move_q = _harvest_move_q(sequelize, DataTypes);
  var harvest_plans = _harvest_plans(sequelize, DataTypes);
  var harvest_types = _harvest_types(sequelize, DataTypes);
  var heads = _heads(sequelize, DataTypes);
  var import_qa_results = _import_qa_results(sequelize, DataTypes);
  var import_qc_saps = _import_qc_saps(sequelize, DataTypes);
  var import_weight_saps = _import_weight_saps(sequelize, DataTypes);
  var input_items = _input_items(sequelize, DataTypes);
  var insect_acts = _insect_acts(sequelize, DataTypes);
  var land_cases = _land_cases(sequelize, DataTypes);
  var land_names = _land_names(sequelize, DataTypes);
  var lock_dates = _lock_dates(sequelize, DataTypes);
  var lock_gpx = _lock_gpx(sequelize, DataTypes);
  var map_matcode = _map_matcode(sequelize, DataTypes);
  var mat_codes = _mat_codes(sequelize, DataTypes);
  var plan_act_details = _plan_act_details(sequelize, DataTypes);
  var plan_acts = _plan_acts(sequelize, DataTypes);
  var plan_schedule_details = _plan_schedule_details(sequelize, DataTypes);
  var plan_schedules = _plan_schedules(sequelize, DataTypes);
  var planning_detail_date = _planning_detail_date(sequelize, DataTypes);
  var planning_details = _planning_details(sequelize, DataTypes);
  var plannings = _plannings(sequelize, DataTypes);
  var plant_code = _plant_code(sequelize, DataTypes);
  var prev_chem = _prev_chem(sequelize, DataTypes);
  var process_codes = _process_codes(sequelize, DataTypes);
  var provinces = _provinces(sequelize, DataTypes);
  var qa_crop_mappings = _qa_crop_mappings(sequelize, DataTypes);
  var qa_group_details = _qa_group_details(sequelize, DataTypes);
  var qa_item_details = _qa_item_details(sequelize, DataTypes);
  var qa_masters = _qa_masters(sequelize, DataTypes);
  var qa_rate_chems = _qa_rate_chems(sequelize, DataTypes);
  var qa_rate_sets = _qa_rate_sets(sequelize, DataTypes);
  var qa_region_mapping = _qa_region_mapping(sequelize, DataTypes);
  var qa_roles = _qa_roles(sequelize, DataTypes);
  var qc_defects = _qc_defects(sequelize, DataTypes);
  var qc_rate = _qc_rate(sequelize, DataTypes);
  var qc_result_items = _qc_result_items(sequelize, DataTypes);
  var qc_result_masters = _qc_result_masters(sequelize, DataTypes);
  var qc_roles = _qc_roles(sequelize, DataTypes);
  var receive_mat_details = _receive_mat_details(sequelize, DataTypes);
  var receive_mat_groups = _receive_mat_groups(sequelize, DataTypes);
  var receive_mat_units = _receive_mat_units(sequelize, DataTypes);
  var receive_mats = _receive_mats(sequelize, DataTypes);
  var sample_plans = _sample_plans(sequelize, DataTypes);
  var schedule_roles = _schedule_roles(sequelize, DataTypes);
  var schedule_rules = _schedule_rules(sequelize, DataTypes);
  var seed_codes = _seed_codes(sequelize, DataTypes);
  var seed_packs = _seed_packs(sequelize, DataTypes);
  var sowing_details = _sowing_details(sequelize, DataTypes);
  var sowing_logs = _sowing_logs(sequelize, DataTypes);
  var sowing_shows = _sowing_shows(sequelize, DataTypes);
  var sowings = _sowings(sequelize, DataTypes);
  var standard_code = _standard_code(sequelize, DataTypes);
  var sub_input_items = _sub_input_items(sequelize, DataTypes);
  var syncTbDailyTruck = _syncTbDailyTruck(sequelize, DataTypes);
  var tmp_schedule_plan_details = _tmp_schedule_plan_details(sequelize, DataTypes);
  var tmp_schedule_plans = _tmp_schedule_plans(sequelize, DataTypes);
  var tmp_schedules = _tmp_schedules(sequelize, DataTypes);
  var units = _units(sequelize, DataTypes);
  var user_acts = _user_acts(sequelize, DataTypes);
  var user_farmer = _user_farmer(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);
  var yeilds = _yeilds(sequelize, DataTypes);


  return {
    SAP_EXZ892GSB0010,
    SAP_EXZ892GSB0020,
    acos,
    alert_q_details,
    alert_qs,
    areas,
    aros,
    aros_acos,
    broker_areas,
    broker_head,
    brokers,
    cake_sessions,
    car_deliveries,
    car_delivery_details,
    car_plan,
    checklist_crops,
    checklists,
    chem_crops,
    chem_package,
    chem_plan,
    chemicals,
    cities,
    crops,
    drone_logs,
    farmer_audits,
    farmer_cards,
    farmer_images,
    farmer_saps,
    farmers,
    formula_sets,
    gpx_files,
    groups,
    grow_states,
    harvest_locks,
    harvest_move_q,
    harvest_plans,
    harvest_types,
    heads,
    import_qa_results,
    import_qc_saps,
    import_weight_saps,
    input_items,
    insect_acts,
    land_cases,
    land_names,
    lock_dates,
    lock_gpx,
    map_matcode,
    mat_codes,
    plan_act_details,
    plan_acts,
    plan_schedule_details,
    plan_schedules,
    planning_detail_date,
    planning_details,
    plannings,
    plant_code,
    prev_chem,
    process_codes,
    provinces,
    qa_crop_mappings,
    qa_group_details,
    qa_item_details,
    qa_masters,
    qa_rate_chems,
    qa_rate_sets,
    qa_region_mapping,
    qa_roles,
    qc_defects,
    qc_rate,
    qc_result_items,
    qc_result_masters,
    qc_roles,
    receive_mat_details,
    receive_mat_groups,
    receive_mat_units,
    receive_mats,
    sample_plans,
    schedule_roles,
    schedule_rules,
    seed_codes,
    seed_packs,
    sowing_details,
    sowing_logs,
    sowing_shows,
    sowings,
    standard_code,
    sub_input_items,
    syncTbDailyTruck,
    tmp_schedule_plan_details,
    tmp_schedule_plans,
    tmp_schedules,
    units,
    user_acts,
    user_farmer,
    users,
    yeilds,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
