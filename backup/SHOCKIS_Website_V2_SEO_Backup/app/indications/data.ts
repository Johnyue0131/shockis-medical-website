export type IndicationDetail = {
  slug: string;
  title: string;
  region: string;
  cardDescription: string;
  introduction: string;
  definition: string;
  symptoms: string[];
  causes: string[];
  therapyPrinciple: string;
  clinicalApplication: string;
  faqs: Array<[string, string]>;
};

export const commonIndications: IndicationDetail[] = [
  {
    slug: "plantar-fasciitis",
    title: "Plantar Fasciitis",
    region: "Foot & Ankle",
    cardDescription: "Professional education for plantar fascia and heel-related rehabilitation pathways.",
    introduction: "Plantar fasciitis is a common source of plantar heel pain. Shockwave therapy may be considered by healthcare professionals as part of a structured rehabilitation pathway after clinical assessment.",
    definition: "Plantar fasciitis, also described in some literature as plantar fasciopathy, involves irritation or degenerative change around the plantar fascia, frequently near its attachment at the heel. Diagnosis should distinguish it from other causes of heel pain.",
    symptoms: ["Pain near the underside of the heel", "Discomfort during the first steps after rest", "Pain that may increase after prolonged standing or loading"],
    causes: ["Repeated loading of the plantar fascia", "Changes in activity level or training volume", "Foot mechanics, footwear and other individual factors"],
    therapyPrinciple: "Extracorporeal shockwave therapy delivers externally generated acoustic pulses to a selected treatment area. The biological response and clinical relevance depend on the device type, protocol and patient context.",
    clinicalApplication: "For an appropriate patient, a qualified professional may integrate shockwave therapy with load management, exercise and other rehabilitation measures. Treatment localization and settings must follow the device instructions and professional judgment.",
    faqs: [["Is every case of heel pain plantar fasciitis?", "No. Heel pain has several potential causes, so assessment by a qualified healthcare professional is important."], ["Is shockwave therapy a stand-alone treatment?", "It is commonly evaluated within a wider rehabilitation plan rather than as a substitute for diagnosis, exercise or load management."], ["Are treatment settings the same for every patient?", "No. Settings and treatment planning depend on professional assessment, the specific device and its instructions for use."]],
  },
  {
    slug: "tennis-elbow",
    title: "Tennis Elbow",
    region: "Elbow",
    cardDescription: "Clinical context for lateral elbow tendon pain and professional rehabilitation planning.",
    introduction: "Tennis elbow is a commonly used term for lateral elbow tendinopathy. It is often associated with repeated loading of the wrist extensor tendons and requires differential assessment.",
    definition: "Lateral elbow tendinopathy affects the common extensor tendon region near the lateral epicondyle. Although associated with racquet sports, it can occur in work and daily activities involving repetitive gripping or wrist extension.",
    symptoms: ["Pain or tenderness on the outside of the elbow", "Discomfort with gripping or lifting", "Reduced grip tolerance during repeated activity"],
    causes: ["Repeated wrist extension or gripping", "Sudden change in upper-limb workload", "Accumulated tendon loading and insufficient recovery"],
    therapyPrinciple: "Shockwave therapy applies acoustic pulses to a clinician-selected region. Research has evaluated ESWT for persistent lateral elbow tendinopathy, but outcomes vary with protocol and patient selection.",
    clinicalApplication: "Healthcare professionals may consider shockwave therapy for selected cases within a progressive rehabilitation plan. Localization, tolerance and device parameters require trained clinical judgment.",
    faqs: [["Does tennis elbow only affect athletes?", "No. It can also affect people whose work or daily activities involve repeated gripping and wrist loading."], ["Can shockwave therapy replace clinical assessment?", "No. Elbow pain may have different causes and should be assessed before treatment selection."], ["Who should operate the system?", "Use should follow local requirements, professional training and the applicable product instructions."]],
  },
  {
    slug: "achilles-tendinopathy",
    title: "Achilles Tendinopathy",
    region: "Foot & Ankle",
    cardDescription: "Professional information for Achilles tendon conditions in sports and rehabilitation care.",
    introduction: "Achilles tendinopathy is a load-related tendon condition that can affect the mid-portion or insertion of the Achilles tendon. Treatment planning should reflect the location and clinical presentation.",
    definition: "The condition is associated with pain and impaired tendon function. Mid-portion and insertional presentations differ, and other causes of posterior ankle pain should be excluded through professional assessment.",
    symptoms: ["Pain or stiffness around the Achilles tendon", "Reduced tolerance for running, jumping or walking", "Localized tenderness or tendon thickening"],
    causes: ["Repeated or rapidly increased tendon loading", "Changes in training, recovery or footwear", "Individual biomechanical and health factors"],
    therapyPrinciple: "ESWT has been studied as a non-invasive modality for selected Achilles tendon conditions. Device type, treatment location and clinical protocol influence its application.",
    clinicalApplication: "A clinician may consider shockwave therapy alongside progressive loading and rehabilitation. Insertional and mid-portion presentations require different localization and care considerations.",
    faqs: [["Are all Achilles tendon problems the same?", "No. Location, duration, severity and differential diagnoses influence the treatment pathway."], ["Is exercise still relevant?", "A clinician may combine appropriate loading exercises with other interventions according to the individual case."], ["Can acute tendon rupture be treated this way?", "Suspected rupture or severe injury requires prompt medical assessment and is not a routine shockwave application."]],
  },
  {
    slug: "tendinopathy",
    title: "Tendinopathy",
    region: "Musculoskeletal",
    cardDescription: "An overview of selected tendon disorders and professional shockwave therapy evaluation.",
    introduction: "Tendinopathy is a broad term for persistent tendon pain and impaired function. The involved tendon, stage of the condition and loading demands shape clinical management.",
    definition: "Tendinopathy can involve changes in tendon structure and load tolerance. It is not a single diagnosis or protocol, and symptoms around a tendon may also arise from other tissues.",
    symptoms: ["Load-related tendon pain", "Localized tenderness or stiffness", "Reduced function during sport, work or daily activity"],
    causes: ["Repeated loading beyond current tendon capacity", "Rapid changes in activity or training", "Recovery, biomechanical and systemic factors"],
    therapyPrinciple: "Shockwave therapy is researched for several tendon conditions as a non-invasive adjunct. Evidence and protocols differ by anatomical site, technology and condition duration.",
    clinicalApplication: "Qualified professionals may evaluate ESWT after establishing a specific diagnosis and rehabilitation plan. Treatment should remain condition-specific rather than using one universal tendon protocol.",
    faqs: [["Is tendinopathy the same as tendon inflammation?", "The term covers a broader clinical picture and does not necessarily indicate a purely inflammatory process."], ["Can one protocol be used for every tendon?", "No. Anatomy, depth, diagnosis and device instructions affect treatment planning."], ["What should be assessed first?", "A professional should evaluate symptoms, function, loading history and relevant contraindications."]],
  },
  {
    slug: "calcific-tendinitis",
    title: "Calcific Tendinitis",
    region: "Shoulder",
    cardDescription: "Educational guidance for calcification-related shoulder tendon presentations.",
    introduction: "Calcific tendinitis involves calcium deposits within a tendon, most commonly in the rotator cuff. Imaging and clinical assessment may be used to confirm the condition and guide care.",
    definition: "The condition can produce shoulder pain and reduced movement, although some deposits are asymptomatic. Its presentation should be differentiated from other shoulder disorders.",
    symptoms: ["Shoulder pain that may be intense during active phases", "Pain with lifting or overhead movement", "Reduced shoulder range of motion"],
    causes: ["Calcium deposition within a shoulder tendon", "Tendon cell and tissue changes", "A condition course that may progress through different phases"],
    therapyPrinciple: "Extracorporeal shockwave therapy has been studied for calcific rotator cuff tendinopathy. Focused and radial technologies are not interchangeable, and evidence depends on the technology and protocol studied.",
    clinicalApplication: "Treatment selection should consider imaging, deposit characteristics, symptoms and verified device indications. Professional assessment is essential before choosing a shockwave category or protocol.",
    faqs: [["Is imaging useful for calcific tendinitis?", "Imaging may help confirm the location and characteristics of a calcium deposit as part of clinical assessment."], ["Are radial and focused shockwave systems equivalent?", "No. They generate and deliver energy differently, so published evidence and product indications must be interpreted by technology type."], ["Does every calcium deposit require treatment?", "No. Clinical significance depends on symptoms and professional assessment."]],
  },
  {
    slug: "myofascial-trigger-points",
    title: "Myofascial Trigger Points",
    region: "Musculoskeletal",
    cardDescription: "Professional context for selected myofascial pain and trigger-point workflows.",
    introduction: "Myofascial trigger points are clinically identified sensitive areas within muscle that may be associated with local or referred discomfort. Assessment should consider other possible causes of pain.",
    definition: "Trigger points are described as localized, sensitive areas in a taut band of skeletal muscle. Their identification relies on clinical examination, and terminology and diagnostic criteria continue to be discussed.",
    symptoms: ["Localized muscle tenderness", "Pain that may be felt away from the sensitive area", "Movement discomfort or muscle tightness"],
    causes: ["Sustained or repetitive muscular loading", "Protective muscle tension after injury", "Work, posture and activity-related factors"],
    therapyPrinciple: "Shockwave therapy can deliver mechanical stimulation to selected superficial soft-tissue regions. Its use for myofascial presentations should be based on professional assessment and appropriate device documentation.",
    clinicalApplication: "A trained professional may incorporate shockwave therapy into a broader plan that can include movement, exercise and manual approaches. Treatment location and patient tolerance require careful review.",
    faqs: [["Is every painful muscle area a trigger point?", "No. Similar symptoms can arise from different structures and require assessment."], ["Can shockwave therapy be used near every anatomical structure?", "No. Sensitive structures, contraindications and device instructions must be considered before application."], ["Is this information a treatment protocol?", "No. It is educational content for professional product evaluation and does not prescribe treatment parameters."]],
  },
];

function createFrameworkIndication(slug: string, title: string, region: string, context: string): IndicationDetail {
  return {
    slug,
    title,
    region,
    cardDescription: `Professional education for ${context} and related rehabilitation pathways.`,
    introduction: `${title} is a musculoskeletal topic that may be evaluated in rehabilitation and healthcare settings. A qualified professional should establish the diagnosis and determine whether shockwave therapy is appropriate.`,
    definition: `${title} can describe symptoms or tissue changes affecting the ${context}. Similar presentations may arise from different structures, so clinical history, examination and appropriate investigation are important before treatment planning.`,
    symptoms: ["Localized pain or tenderness", "Reduced tolerance for loading or movement", "Symptoms that may affect work, sport or daily activity"],
    causes: ["Repeated or rapidly increased mechanical loading", "Activity, recovery and individual biomechanical factors", "Condition-specific tissue or movement considerations"],
    therapyPrinciple: "Shockwave therapy delivers externally generated acoustic pulses to a clinician-selected treatment area. Clinical relevance depends on accurate diagnosis, device technology, treatment protocol and patient context.",
    clinicalApplication: "A trained healthcare professional may evaluate shockwave therapy as one component of a condition-specific rehabilitation plan. Localization, settings and treatment progression must follow professional judgment and applicable product documentation.",
    faqs: [[`Does ${title} require professional assessment?`, "Yes. Similar symptoms can have different causes, and treatment selection should follow an appropriate clinical assessment."], ["Is shockwave therapy suitable for every patient?", "No. Suitability depends on the diagnosis, contraindications, product indications and individual clinical context."], ["Is this page a treatment protocol?", "No. It is an educational framework for professional product evaluation and does not prescribe treatment settings."]],
  };
}

const additionalIndications: IndicationDetail[] = [
  createFrameworkIndication("shoulder-tendinopathy", "Shoulder Tendinopathy", "Shoulder", "shoulder tendon"),
  createFrameworkIndication("frozen-shoulder", "Frozen Shoulder", "Shoulder", "shoulder capsule and mobility"),
  createFrameworkIndication("shoulder-pain", "Shoulder Pain", "Shoulder", "shoulder movement and soft tissue"),
  createFrameworkIndication("golfers-elbow", "Golfer's Elbow", "Elbow, Wrist & Hand", "medial elbow tendon"),
  createFrameworkIndication("wrist-tendinopathy", "Wrist Tendinopathy", "Elbow, Wrist & Hand", "wrist tendon"),
  createFrameworkIndication("lower-back-pain", "Lower Back Pain", "Back & Hip", "lower back"),
  createFrameworkIndication("hip-tendinopathy", "Hip Tendinopathy", "Back & Hip", "hip tendon"),
  createFrameworkIndication("myofascial-pain", "Myofascial Pain", "Back & Hip", "myofascial tissue"),
  createFrameworkIndication("patellar-tendinopathy", "Patellar Tendinopathy", "Knee & Lower Leg", "patellar tendon"),
  createFrameworkIndication("knee-pain", "Knee Pain", "Knee & Lower Leg", "knee"),
  createFrameworkIndication("lower-leg-conditions", "Lower Leg Conditions", "Knee & Lower Leg", "lower-leg musculoskeletal tissue"),
  createFrameworkIndication("heel-pain", "Heel Pain", "Foot & Ankle", "heel and surrounding tissue"),
  createFrameworkIndication("muscle-pain", "Muscle Pain", "Muscle & Fascia", "skeletal muscle"),
];

export type BodyArea = {
  number: string;
  name: string;
  description: string;
  conditions: Array<{ name: string; slug: string }>;
};

export const bodyAreas: BodyArea[] = [
  { number: "01", name: "Shoulder", description: "Shoulder tendon, mobility and pain-related education.", conditions: [{ name: "Calcific Tendinitis", slug: "calcific-tendinitis" }, { name: "Shoulder Tendinopathy", slug: "shoulder-tendinopathy" }, { name: "Shoulder Pain", slug: "shoulder-pain" }] },
  { number: "02", name: "Elbow, Wrist & Hand", description: "Upper-limb tendon and overuse application topics.", conditions: [{ name: "Tennis Elbow", slug: "tennis-elbow" }, { name: "Golfer's Elbow", slug: "golfers-elbow" }, { name: "Wrist Tendinopathy", slug: "wrist-tendinopathy" }] },
  { number: "03", name: "Back & Hip", description: "Back, hip and myofascial rehabilitation topics.", conditions: [{ name: "Lower Back Pain", slug: "lower-back-pain" }, { name: "Hip Tendinopathy", slug: "hip-tendinopathy" }, { name: "Myofascial Pain", slug: "myofascial-pain" }] },
  { number: "04", name: "Knee & Lower Leg", description: "Knee tendon, pain and lower-leg application topics.", conditions: [{ name: "Patellar Tendinopathy", slug: "patellar-tendinopathy" }, { name: "Knee Pain", slug: "knee-pain" }, { name: "Lower Leg Conditions", slug: "lower-leg-conditions" }] },
  { number: "05", name: "Foot & Ankle", description: "Plantar fascia, Achilles tendon and heel education.", conditions: [{ name: "Plantar Fasciitis", slug: "plantar-fasciitis" }, { name: "Achilles Tendinopathy", slug: "achilles-tendinopathy" }, { name: "Heel Pain", slug: "heel-pain" }] },
  { number: "06", name: "Muscle & Fascia", description: "Professional education for muscle and fascial presentations.", conditions: [{ name: "Myofascial Trigger Points", slug: "myofascial-trigger-points" }, { name: "Muscle Pain", slug: "muscle-pain" }] },
];

export const indicationDetails = [...commonIndications, ...additionalIndications];

export function getIndicationBySlug(slug: string) {
  return indicationDetails.find((item) => item.slug === slug);
}
